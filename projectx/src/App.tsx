import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Projectx</h2>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="header" id="home">
        <h1>Welcome to Projectx</h1>
        <p className="intro-text">
          This is a page with a full-page gradient background. It’s a starting point for the project!
        </p>
      </header>

      <section className="content-section" id="about">
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

      <footer className="footer" id="contact">
        <p>Projectx</p>
      </footer>
    </div>
  );
}

export default App;