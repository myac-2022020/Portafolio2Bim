import logo from '../assets/img/logo.png'
export const Navbar = () => {
  return (
      <header className='Navbar'>
        <div className="contenedor-logo">
          <img src={logo} alt="logo" className='logo-diario'/>
          <h2 className='nombre-proyecto' >Diario Del Programador.</h2>
        </div>
        <nav className='content-nav'>
          <a href="/taller" className="options">Taller</a>
          <a href="/technology" className="options">Tecnología</a>
          <a href="/practice" className="options">Practica Supervisada</a>
        </nav>
      </header>
  )
}
