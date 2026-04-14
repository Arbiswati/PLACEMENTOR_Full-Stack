import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [skills, setSkills] = useState("");
  const [interest, setInterest] = useState("");
  const [goal, setGoal] = useState("");

 
  const [guidance, setGuidance] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setGuidance(null); 

    try {
      const response = await fetch("http://localhost:5000/guidance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        
        body: JSON.stringify({ skills, interest, goal }),
      });

      const data = await response.json();
      console.log("Response:", data);

      setGuidance(data);

      // clear inputs
      setSkills("");
      setInterest("");
      setGoal("");

    } catch (error) {
      console.error("Error:", error);

    
      setGuidance({
        suggestion: "Something went wrong. Please try again.",
        roadmap: [],
        resources: ""
      });
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2>Get Your AI Career Guidance</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter your interests"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter your career goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Get Guidance"}
          </button>
        </form>

        {loading && <p className="loading">Generating guidance...</p>}

       
        {guidance && (
          <div className="result">
            <h3>Your Guidance:</h3>

            {/* suggestion */}
            <p>{guidance.suggestion}</p>

            {/* roadmap */}
            {guidance.roadmap && (
              <>
                <h4>Roadmap:</h4>
                <ul>
                  {guidance.roadmap.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </>
            )}

            {/* resources */}
            {guidance.resources && (
              <a href={guidance.resources} target="_blank">
                Learn More
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserForm;