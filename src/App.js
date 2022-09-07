import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const url =
    "https://via.placeholder.com/640/00FF00/000000?text=This+image+was+loaded+by+react";

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React</title>
        <meta property="og:image" content={url} />
        <meta
          name="description"
          content="This description was rendered by React."
        />
      </Helmet>

      <header className="App-header">
        <p>React</p>

        <img src={url} alt="This was loaded by React"></img>
      </header>
    </div>
  );
}

export default App;
