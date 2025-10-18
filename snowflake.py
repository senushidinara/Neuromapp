# snowflake_demo.py
# Demo: Snowflake AI advice for NeuroMapping cognitive risk

from snowflake.snowpark.session import Session
import getpass

# Ask user for Snowflake password securely
password = getpass.getpass("Enter your Snowflake password: ")

# Connect to Snowflake
session = Session.builder.configs({
    "account": "oxwyfyd-lh07322",      # your dedicated URL
    "user": "SENUSHIDINARA",           # your Snowflake username
    "password": password,
    "role": "SYSADMIN",
    "warehouse": "COMPUTE_WH",         # demo warehouse
    "database": "NEUROMAPPING_DB",     # demo database
    "schema": "PUBLIC"
}).create()

# Example cognitive risk score (users can replace this with real model output)
risk_score = 0.73

# Get AI-generated advice using Snowflake LLM API
response = session.sql(f"""
SELECT SYSTEM$AI_SUMMARIZE(
'User cognitive risk score is {risk_score}. Provide simple, friendly advice to improve focus and mental safety.'
)
""").collect()

# Print Snowflake AI advice
snowflake_advice = response[0][0]
print("\n💡 Snowflake AI Advice:")
print(snowflake_advice)
