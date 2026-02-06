import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";

import './styles/App.css'

import articleImg from "../src/assets/images/news-page.png"
import articleImg2 from "../src/assets/images/img-ia.jpeg"

// componente em classe é uma classe que herda a classe React.Component do React
// e retorna HTML dentro do método render

//componente funcional é uma função que retorna HTML

class App extends React.Component {
  //metodo responsavel por renderizar o HTML do nosso componente
  render() {
    return (
      <>
         <Navbar />
         {/* <Counter/> */}

         <section id="articles">
            <Article title="Designing Dashboards"
            provider="NASA"
            description="A dashboard is a tool that helps users to visualize and understand complex data. It typically consists of a set of widgets that display different metrics and trends."
            img={articleImg}
            />
            <Article title="The Evolution of AI"
            provider="MIT Technology Review"
            description="Artificial intelligence (AI) is a branch of computer science that focuses on creating machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making."
            img={articleImg2}
            />
         </section>
      </>
    )
  }
}

export default App;
