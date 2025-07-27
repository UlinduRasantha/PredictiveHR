from sqlalchemy.orm import Session
from app.schemas import user as user_schema
from app.models import user as user_model
from app import security


def get_user_by_email(db: Session, email: str):
 
    return db.query(user_model.User).filter(user_model.User.email == email).first()


def create_user(db: Session, user: user_schema.UserCreate):

    hashed_password = security.get_password_hash(user.password)

    # Create a new User model instance
    db_user = user_model.User(
        email=user.email,
        hashed_password=hashed_password,
        first_name=user.first_name,
        last_name=user.last_name,
        company=user.company,
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
