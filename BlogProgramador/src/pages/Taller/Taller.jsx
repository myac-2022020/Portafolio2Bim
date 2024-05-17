import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/fondoBlog.jpeg';
import { TallerContent } from "../../components/TallerContent.jsx";
import './Taller.css';

export const Taller = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar />
      <div className="title-section">Taller</div>
      <div className="container-project">
        <div className="theme-data">
          <p>
            En esta página veremos los proyectos trabajados en el bimestre 1,
            veremos proyectos basados en Javascript, realizando CRUDS usando
            Mongoose y Express como medio de conexión a nuestro gestor de bases
            de datos MongoDBCompass.
            <br />
            <br />
            Cada proyecto mostrado acá tiene como objetivo el uso de la lógica
            de Javascript y ver así el potencial de este lenguaje de programación.
          </p>
        </div>
        <div className="code-data">
          <pre>
            &lt;!DOCTYPE html&gt;
            <br />
            &lt;html&gt;
            <br />
            &lt;head&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;ᴊᴜᴇɢᴏ ᴅᴇ ᴀʜᴏʀᴄᴀᴅᴏ&lt;/title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;link
            rel="stylesheet"
            type="text/css"
            href="style.css"
            &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;link
            href="https://fonts.cdnfonts.com/css/black-ops-one-2"
            rel="stylesheet"
            &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel="icon" href="Image//logo.png"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;script src="script.js" defer&gt;&lt;/script&gt;
            <br />
            &lt;/head&gt;
            <br />
            &lt;body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;img
            src="Image//ganaste.gif"
            style="position:absolute; z-index: 2; width: 99vw; height: 96vh;"
            id="ganador"
            &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;img
            src="Image//perdiste.gif"
            style="position: absolute; z-index: 2; width: 89vw; height: 86vh; left: 50%; top: 50%; transform: translate(-50%, -50%);"
            id="perdedor"
            &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            id="visualizacion-palabra"
            class="cajaPalabra"
            &gt;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="intentos"&gt;Intentos restantes: &lt;span id="intentos-restantes"&gt;&lt;/span&gt;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;center&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="cajaTeclado"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;canvas id="ahorcado"&gt;Al parecer ha ocurrido un problema con la grafica, pruebe intentando nuevamente&lt;/canvas&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" id="entrada-tecla" class="entradaTexto" placeholder="Ingresa una letra" /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="teclado" id="teclado"&gt;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modal" id="miModal"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modal-contenido"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p id="mensaje-modal"&gt;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;H2
            id="textoGanador"
            style="color:#FFFFFF; border-bottom: 1em solid #001B49;"
            &gt;Felicidades, campeón!!&lt;/H2&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;H2
            id="textoPerdedor"
            style="color:#FFFFFF; border-bottom: 1em solid #001B49;"
            &gt;Perdiste, la palabra era: &lt;span id="palabraNoAdivinada"&gt;&lt;/span&gt;&lt;/H2&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            class="boton"
            id="recargarPagina"
            style="position:absolute;z-index:3;top: 75%;left: 50%;transform: translate(-50%, -50%);"
            &gt;Volver a jugar&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/center&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
            <br />
            &lt;/html&gt;
          </pre>
        </div>
      </div>
      <br/>
      <TallerContent></TallerContent>
    </div>
  );
};
