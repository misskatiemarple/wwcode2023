import "./App.css";
import SearchEngineSkills from "./SearchEngineSkills.js";
import SearchNoSkills from "./SearchNoSkills";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <header className="App-header">
        <h1>Welcome Back To The Workforce, Mama</h1>
        <h2>Let's find your next dream job!</h2>
      </header>
      <body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <SearchEngineSkills />
        <SearchNoSkills />
      </body>
      <footer>
        <div class="footer">
          <div class="address-box">
            <ul>
              <li>Address Line 1</li>
              <li>Address Line 2</li>
              <li>Address 3</li>
            </ul>
          </div>
          <div class="code-msg-box">
            <p>
              Coded by:{" "}
              <a href="#" target="_blank" rel="nonreferrer">
                Katie
              </a>{" "}
              and
              <a
                href="https://github.com/coffeeB4Ugo"
                target="_blank"
                rel="nonreferrer"
              >
                Kalie
              </a>
            </p>
          </div>
          <div class="brand-stamp-box">
            <p>WWCode</p>
            <p>Tokyo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
