# snowflake_demo.py
# NeuroMapping: Snowflake Data Access Script

from snowflake.snowpark.session import Session
import getpass

# --- 1️⃣ Ask user for Snowflake password securely ---
password = getpass.getpass("Enter your Snowflake password: ")

# --- 2️⃣ Connect to Snowflake using your account ---
session = Session.builder.configs({
    "account": "oxwyfyd-lh07322",      # Dedicated Snowflake URL
    "user": "SENUSHIDINARA",           # Snowflake username
    "password": password,
    "role": "SYSADMIN",
    "warehouse": "COMPUTE_WH",         # Warehouse name
    "database": "NEUROMAPPING_DB",     # Database storing cognitive risk scores
    "schema": "PUBLIC"
}).create()

# --- 3️⃣ Query latest cognitive risk score from Snowflake ---
# Replace 'RISK_SCORES' with your actual table name and columns
result = session.table("RISK_SCORES").select("USER_ID", "RISK_SCORE").limit(5).collect()

# --- 4️⃣ Print retrieved data ---
print("\n❄️ Latest Cognitive Risk Scores from Snowflake:")
for row in result:
    print(f"User ID: {row['USER_ID']}, Risk Score: {row['RISK_SCORE']:.2f}")

# --- 5️⃣ Close session ---
session.close()
