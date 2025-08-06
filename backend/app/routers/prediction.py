from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import pandas as pd
import joblib
import numpy as np
import traceback
import os

# --- Router Setup ---
router = APIRouter()

# --- Loading ML Artifacts ---
# Build paths relative to this file's location to be more robust
# This ensures it works no matter where you run the uvicorn server from
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # This goes up to the 'app' directory
MODEL_DIR = os.path.join(BASE_DIR, '..', 'ml_models') # Go up one more level to the 'backend' root, then into 'ml_models'

try:
    model = joblib.load(os.path.join(MODEL_DIR, "logistic_regression_model.pkl"))
    scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
    le_gender = joblib.load(os.path.join(MODEL_DIR, "le_gender.pkl"))
    le_marital = joblib.load(os.path.join(MODEL_DIR, "le_marital.pkl"))
    le_remote = joblib.load(os.path.join(MODEL_DIR, "le_remote.pkl"))
    model_columns = joblib.load(os.path.join(MODEL_DIR, "model_columns.pkl"))
except FileNotFoundError as e:
    # If files aren't found on startup, it's a critical error.
    # The API can't serve its purpose. We raise an exception to stop the server from starting.
    raise RuntimeError(f"Could not load ML model artifacts: {e}")


# --- Input Schema (Pydantic Model) ---
class EmployeeData(BaseModel):
    age: int
    gender: str
    jobRole: str
    monthlyIncome: float
    workLifeBalance: str
    numberOfPromotions: int
    distanceFromHome: float
    educationLevel: str
    maritalStatus: str
    jobLevel: str
    companySize: str
    remoteWork: str

# --- Helper Function ---
# (You can keep this helper function as is)
def normalize_option(value: str) -> str:
    """Normalize incoming option text to match training labels (basic)."""
    if value is None:
        return value
    v = value.strip()
    # specific common mappings
    if v.lower().startswith("bachelor"):
        return "Bachelor's Degree"
    if v.lower().startswith("master"):
        return "Master's Degree"
    if v.lower().startswith("associate"):
        return "Associate Degree"
    if v.lower().startswith("phd"):
        return "PhD"
    # title-case otherwise so "small" -> "Small", "yes" -> "Yes"
    return " ".join([w.capitalize() for w in v.split()])


# --- Prediction Endpoint ---
@router.post("/predict")
def predict(data: EmployeeData):
    # The logic from your model.py goes here, unchanged.
    try:
        # 1) Convert to dict and normalize
        inp = data.dict()
        inp["gender"] = normalize_option(inp["gender"])
        inp["jobRole"] = normalize_option(inp["jobRole"])
        inp["workLifeBalance"] = normalize_option(inp["workLifeBalance"])
        inp["educationLevel"] = normalize_option(inp["educationLevel"])
        inp["maritalStatus"] = normalize_option(inp["maritalStatus"])
        inp["jobLevel"] = normalize_option(inp["jobLevel"])
        inp["companySize"] = normalize_option(inp["companySize"])
        inp["remoteWork"] = normalize_option(inp["remoteWork"])

        # 2) Build a DataFrame
        raw = {
            "Age": inp["age"], "Gender": inp["gender"], "Monthly Income": inp["monthlyIncome"],
            "Number of Promotions": inp["numberOfPromotions"], "Distance from Home": inp["distanceFromHome"],
            "Marital Status": inp["maritalStatus"], "Remote Work": inp["remoteWork"], "Job Role": inp["jobRole"],
            "Work-Life Balance": inp["workLifeBalance"], "Education Level": inp["educationLevel"],
            "Job Level": inp["jobLevel"], "Company Size": inp["companySize"]
        }
        df_raw = pd.DataFrame([raw])

        # 3) Apply LabelEncoders
        try:
            df_raw["Gender"] = le_gender.transform(df_raw["Gender"])
            df_raw["Marital Status"] = le_marital.transform(df_raw["Marital Status"])
            df_raw["Remote Work"] = le_remote.transform(df_raw["Remote Work"])
        except ValueError as e:
            raise HTTPException(status_code=400, detail=f"Invalid category value: {e}")

        # 4) One-hot encode
        cat_cols = ["Job Role", "Work-Life Balance", "Education Level", "Job Level", "Company Size"]
        df_ohe = pd.get_dummies(df_raw[cat_cols], dtype=int)

        # 5) Build the preprocessed dataframe
        numeric_cols = ["Age", "Gender", "Monthly Income", "Number of Promotions", "Distance from Home", "Marital Status", "Remote Work"]
        df_proc = pd.concat([df_raw[numeric_cols], df_ohe], axis=1)

        # 6) Reindex to match model columns
        df_aligned = df_proc.reindex(columns=model_columns, fill_value=0)

        # 7) Scale
        X_scaled = scaler.transform(df_aligned)

        # 8) Predict
        prediction_val = int(model.predict(X_scaled)[0])
        probability = float(model.predict_proba(X_scaled)[0][1]) # Probability of class 1 (Attrition)

        # IMPORTANT: Your frontend logic seems to expect the probability of *No Attrition*.
        # Let's return the probability of class 0 (No Attrition) to match the dashboard logic.
        # Probability of No Attrition = 1 - Probability of Attrition
        final_probability = 1 - probability

        return {"prediction": prediction_val, "probability": round(final_probability, 4)}

    except HTTPException:
        raise
    except Exception:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="An internal error occurred during prediction.")