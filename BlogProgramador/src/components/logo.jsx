import logo from '../assets/img/logo.png'
import fondo from '../assets/img/fondoBlog.jpeg'
import ahorcado from '../assets/img/imgAhorcado.png'
import proyectoWeb from '../assets/img/proyectoWeb.png'

export const logo = () => {
  return (
    <div>
      <img src={logo}/>
      <img src={fondo}/>
      <img src={ahorcado}/>
      <img src={proyectoWeb}/>
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}
