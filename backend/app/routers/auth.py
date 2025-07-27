from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta

from app.schemas import user as user_schema
from app.crud import user as user_crud
from app import security
from app.database import get_db

router = APIRouter()

ACCESS_TOKEN_EXPIRE_MINUTES = security.ACCESS_TOKEN_EXPIRE_MINUTES

@router.post("/register", response_model=user_schema.UserInDB, status_code=status.HTTP_201_CREATED)
def register_user(new_user: user_schema.UserCreate, db: Session = Depends(get_db)):

    db_user = user_crud.get_user_by_email(db, email=new_user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )
    return user_crud.create_user(db=db, user=new_user)


@router.post("/login", response_model=user_schema.Token)
def login_for_access_token(credentials: user_schema.UserLogin, db: Session = Depends(get_db)):
 
    db_user = user_crud.get_user_by_email(db, email=credentials.email)
    if not db_user or not security.verify_password(credentials.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create the access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        data={"sub": db_user.email}, expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}
