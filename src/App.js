import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <footer>
        <div class="footer">
          <div class="address-box">
            <p>Address 1</p>
            <p>Address 2</p>
            <p>〒000-0000</p>
          </div>
          <div class="code-msg-box">
            <p>
              Coded by:{" "}
              <a href="#" target="_blank">
                Katie
              </a>{" "}
              and
              <a href="https://github.com/coffeeB4Ugo" target="_blank">
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
