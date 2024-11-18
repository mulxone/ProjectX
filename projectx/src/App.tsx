import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to Projectx</h1>
        <p className="intro-text">
          This is a page with a full-page gradient background. It’s a starting point for the project!
        </p>
      </header>

      <section className="content-section">
        <div className="card">
          <h2>Why Projectx?</h2>
          <p>
            Built with modern technologies like React, this app offers great performance and a smooth user experience.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="card">
          <h2>Get Started</h2>
          <p>
            Ready to explore the app? Start today and discover all its features!
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <footer className="footer">
        <p>Projectx</p>
      </footer>
    </div>
  );
}

export default App;