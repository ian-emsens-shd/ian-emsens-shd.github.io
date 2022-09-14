import "./App.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

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
        <p>
          {t("key-with-a-url")}
          <br />
          {t("key-with-an-external-url")}
        </p>

        <p
          dangerouslySetInnerHTML={{
            __html: `${t("key-with-a-url")}<br/>${t(
              "key-with-an-external-url"
            )}`,
          }}
        />

        <img src={url} alt="This was loaded by React"></img>
      </header>
    </div>
  );
}

export default App;
