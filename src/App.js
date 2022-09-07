import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React</title>
        <meta
          property="og:image"
          content="https://via.placeholder.com/640/00FF00/000000?text=This+image+was+loaded+from+react"
        />
      </Helmet>

      <header className="App-header">
        <p>React</p>
      </header>
    </div>
  );
}

export default App;
