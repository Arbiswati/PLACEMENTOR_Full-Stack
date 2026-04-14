import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <h1>AI Career Guide</h1>
      </header>

      <section className="hero">
        <h2>Plan Your Career with AI</h2>
        <p>
          Get personalized career guidance based on your skills,
          interests, and goals — powered by artificial intelligence.
        </p>
      </section>

      <UserForm />

      <section className="features">
        <div className="feature-card">
          <h3>🎯 Personalized Advice</h3>
          <p>
            Receive career guidance tailored to your unique skills
            and long-term goals.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Instant Results</h3>
          <p>
            Get AI-powered suggestions instantly without waiting
            for manual consultation.
          </p>
        </div>

        <div className="feature-card">
          <h3>📈 Career Growth</h3>
          <p>
            Discover the right roadmap to boost your placement
            and career opportunities.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 AI Career Guide. Built with ❤️ using React & Node.js</p>
      </footer>
    </>
  );
}

export default App;
