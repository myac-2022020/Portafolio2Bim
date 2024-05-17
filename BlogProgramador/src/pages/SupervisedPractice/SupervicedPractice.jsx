import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/fondoBlog.jpeg';
import { PracticeContent } from "../../components/PracticeContent.jsx";
import './SupervicedPractice.css'

export const SupervicedPractice = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar></Navbar>
      <div className="title-section">Practica Supervisada</div>
      <div className="container-project">
        <div className="theme-data">El curso de practica supervisada une las dos clases anteriores, pero esta
         vez de forma diferente, ya que busca dar un enfoque mas externo a la industria tecnologica. 
        </div>
        <div className="practice-data">Desarrollamos aplicaciones con las tecnologias mencionadas en el curso anterio
          y asi tambien se hace uso de Javascript, esto implica tener la capacidad de poder instalar y ocnfigurar una
          Web API.
        </div>
      </div>
      <PracticeContent></PracticeContent>
    </div>
  )
}
