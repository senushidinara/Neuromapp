# NeuroMapping: Gemini + Snowflake Integration
This project demonstrates the integration of Snowflake as the central data platform and Gemini for AI processing. Users can run the NeuroMapping app locally, query cognitive risk scores from Snowflake, and generate insights via the AI.

**Run Locally:**  
Prerequisites: Node.js  
1. Install dependencies: `npm install`  
2. Set your Gemini API key in `.env.local`: `VITE_GEMINI_API_KEY="YOUR_PERSONAL_API_KEY_HERE"`  
3. Run the app: `npm run dev`

**Snowflake Role:**  
Snowflake acts as the secure, scalable platform for storing, managing, and providing access to cognitive risk scores. Its responsibilities include:  
- **Data Storage:** Stores cognitive risk scores and context in structured tables, ensuring data is secure, organized, and queryable.  
- **Integration Point:** Provides a secure API for external applications or AI services to access the data.  
- **Data Management:** Handles retrieval, aggregation, and updates efficiently, allowing multiple scripts or users to access the same data reliably.  
- **Orchestration for AI Processing:** Serves as the source of input data for AI workflows, ensuring cognitive risk scores are available for external processing.

**User Interaction:**  
- Users run `snowflake_demo.py` to query cognitive risk scores.  
- Snowflake delivers the requested data in real time to the script.  
- Users can also update or add new scores via Snowflake tables as needed.

**Example Workflow:**  
User Risk Score (EEG/Transformer) → Snowflake Table → Snowflake API Call → External LLM → Human-Readable Cognitive Safety Advice → App / Script displays output.
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


