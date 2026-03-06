import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";

import "./styles/App.css";

// componente em classe é uma classe que herda a classe React.Component do React
// e retorna HTML dentro do método render

//componente funcional é uma função que retorna HTML
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/",
      );
      const newsData = response.data;
      setNews(newsData.results || []);
    }
    loadNews();
  }, []);

  // useEffect(() => {
  //   fetch("https://api.spaceflightnewsapi.net/v4/articles/")
  //     .then((response) => response.json())
  //     .then((json) => setNews(json));
  // }, []);

  return (
    <>
      <Navbar />

      {/* <Counter/> */}

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "400px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              img={article.image_url}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
