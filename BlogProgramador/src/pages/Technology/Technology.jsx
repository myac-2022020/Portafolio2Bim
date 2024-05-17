import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/fondoBlog.jpeg';
import { TechnologyContent } from "../../components/TechnologyContent.jsx";
import './Technology.css'

export const Technology = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar></Navbar>
      <div className="title-section">Tecnología</div>
      <div className="container-project">
        <div className="theme-data">El curso de Tecnologia pretende llevar a cabo el aprendizaje de temas que
        se practicarán en taller, instruyendo la teoria de cada tema, teniendo en cuenta primero el aprendizaje 
        teórico, esto con el fin de que podamos dominar los temas en la práctica.</div>
        <div className="technology-data">Desarrollamos aplicaciones con Tecnologia Web y movil mediante los 
        conocimientos tanto teóricos como prácticos de NodeJS, ReactJS, RailWay. Así como hacer el uso del lenguaje
         de programación Javasctipt, esto con el fin de ser capaz de desarrollar una Web API, una página web, asi 
         como hacer uso de conexiones a DB NoSQL.</div>
      </div>
      <TechnologyContent></TechnologyContent>
    </div>
  )
}
