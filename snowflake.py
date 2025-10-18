# snowflake_demo.py
# Real Snowflake AI advice for NeuroMapping cognitive risk

from snowflake.snowpark.session import Session
import getpass

# --- 1️⃣ Ask user for Snowflake password securely ---
password = getpass.getpass("Enter your Snowflake password: ")

# --- 2️⃣ Connect to Snowflake using your actual account ---
session = Session.builder.configs({
    "account": "oxwyfyd-lh07322",      # your dedicated URL
    "user": "SENUSHIDINARA",           # your Snowflake username
    "password": password,
    "role": "SYSADMIN",
    "warehouse": "COMPUTE_WH",         # warehouse name
    "database": "NEUROMAPPING_DB",     # database for NeuroMapping
    "schema": "PUBLIC"
}).create()

# --- 3️⃣ Example cognitive risk score ---
risk_score = 0.73  # Replace with your model output

# --- 4️⃣ Use Snowflake LLM API to generate advice ---
response = session.sql(f"""
SELECT SYSTEM$AI_SUMMARIZE(
'User cognitive risk score is {risk_score}. Provide simple, friendly advice to improve focus and mental safety.'
)
""").collect()

# --- 5️⃣ Print AI-generated advice ---
snowflake_advice = response[0][0]
print("\n💡 Snowflake AI Advice:")
print(snowflake_advice)
