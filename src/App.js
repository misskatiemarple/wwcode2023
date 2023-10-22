import SearchEngineSkills from "./SearchEngineSkills.js";
import SearchNoSkills from "./SearchNoSkills";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  return (
    <div className="Page-container">
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
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blah
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Up-skill & Re-skill
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="App">
        <div className="hero-container">
          <div
            className="hero-image"
            alt="a woman's hands are resting on a laptop keyboard"
          >
            <h3 className="hero-h3">..HEY MAMA..</h3>
            <h1 className="hero-h1">Want to rejoin the workforce?</h1>
            <h2 className="hero-h4">Find your next dream job</h2>
          </div>
        </div>
        <div className="page-container">
          <body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <SearchEngineSkills />
            <SearchNoSkills />
          </body>
        </div>
      </div>
      <div class="footer mt-3">
        <div class="address-box">
          <ul>
            <li>A Better World</li>
            <li>Tokyo</li>
            <li>Japan</li>
            <li>〒279-0031</li>
          </ul>
        </div>
        <div class="code-msg-box">
          <p>
            Coded by{" "}
            <a
              href="https://github.com/misskatiemarple/wwcode2023"
              target="_blank"
              rel="noreferrer"
              className="link-override"
            >
              Katie{" "}
            </a>
            and{" "}
            <a
              href="https://github.com/coffeeB4Ugo"
              target="_blank"
              rel="noreferrer"
              className="link-override"
            >
              Kalie
            </a>
          </p>
          <p className="mb-0">
            <strong>
              Submission project for the{" "}
              <a
                href="https://www.womenwhocode.com/network/tokyo/"
                target="_blank"
                rel="norefferer"
                className="link-override"
              >
                Women Who Code Tokyo
              </a>{" "}
            </strong>
          </p>
          <p className="mt-0">
            <strong>Hackathon for Social Good 2023</strong>
          </p>
        </div>
        <div class="brand-stamp-box">
          <img src="/public/WWCodelogo.jpeg" alt="Women Who Code Logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
