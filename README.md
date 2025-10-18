# ⚠️ Gemini API Key Required

The NeuroMapping AI assistant uses the Gemini API for real-time interactive responses.  

**Important:** The repository contains a **placeholder API key**. To enable full functionality, each user must provide their **own Gemini API key**.  

---

## How to Obtain a Gemini API Key

1. Go to the official Gemini API portal: [https://developers.google.com/gemini](https://developers.google.com/gemini)  
2. Sign in with your Google account or create a new one if needed.  
3. Navigate to **"Get API Key"** or **"Create Project"** (depending on the current UI).  
4. Register a new project and follow the prompts to enable the Gemini API.  
5. Once the project is created, locate the **API key** under the “Credentials” section.  
6. Copy the key — this is the value you will use in your NeuroMapping app.

---

## How to Enable in NeuroMapping

1. In your project root, create a `.env` file if it doesn't exist.  
2. Add the following environment variable, replacing it with your personal key:

```env
VITE_GEMINI_API_KEY="YOUR_PERSONAL_API_KEY_HERE"

View your app in AI Studio: https://ai.studio/apps/drive/1O6vdnvydREmk9TwFraCFwSMJB5L1V5Kd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
'''



## NeuroMapping: Snowflake Role

In this project, **Snowflake acts as the central platform** for storing, managing, and providing access to cognitive risk score data. Here’s what Snowflake does in the setup:

---

## Snowflake’s Responsibilities

1. **Data Storage**  
   - Stores cognitive risk scores and related context in structured tables.  
   - Ensures data is **secure, organized, and easily queryable**.

2. **Integration Point**  
   - Provides a secure API interface for other systems or services to access the data.  
   - Enables **external applications or AI services** to query cognitive risk scores.

3. **Data Management**  
   - Handles data retrieval, aggregation, and updates efficiently.  
   - Allows multiple users or scripts to access the same data reliably.

4. **Orchestration for AI Processing**  
   - Serves as the source of input data for AI workflows.  
   - Ensures that cognitive risk scores are readily available for external processing.  

---

## How Users Interact with Snowflake

- Users run `snowflake_demo.py` to query cognitive risk scores.  
- Snowflake delivers the requested data in real time to the script.  
- Users can also update or add new scores via Snowflake tables if needed.  

---


