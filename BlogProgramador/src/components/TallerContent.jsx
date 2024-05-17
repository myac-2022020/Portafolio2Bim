import { Button } from "./Button.jsx"
import ahorcado from '../assets/img/imgAhorcado.png'
import proyectoWeb from '../assets/img/proyectoWeb.png'

export const TallerContent = () => {
  return (
    <div className='dashboard-content'>
      <div class="container">
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">
              Proyectos
            </p> 
            <ul class="content__container__list">
              <li class="content__container__list__item">Javascript !</li>
              <li class="content__container__list__item">MongoDB !</li>
              <li class="content__container__list__item">Thunder !</li>
              <li class="content__container__list__item">Primer Bimestre</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="homework">
        <h2>Ahorcado con Javascript.</h2>
        <p>Este proyecto en clase el cuál fue inspirado por una tarea hecha con anterioridad
          tiene como objetivo el comprobar nuestro conocimiento de JS, ademas de ser una pequeña entrada a
           este nuevo año.
        </p>
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto me dio mayor conocimiento de un lenguaje de programación que desconocia, el ver
          este nuevo reto a principios de año fue de lo mejor, el tener de frente un nuevo mundo lleno de
          posibilidades y combinaciones fue bastante emocionante. El hecho de enfrentarme a algo desconocido, 
          sin saber mas que lo básico para hacerle frente. Como conclusión de este proyecto, para mi fue una
          breve introducción hacia lo que veriamos.
          <br />
          <br />
          Combinamos Javascript con HTML y CSS para hacer un juego de ahorcado, el cual tiene como objetivo 
          comprender la logica detras de los juegos de ahorcado que podemos encontrar en internet.
          <br />
          <br />
          <img src={ahorcado} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/myac-2022020_kinal_edu_gt/EgfoezvsL4xEt-t-e1rYi1EBaH-q9JGEhtepu3hq0vQeJg?e=0Sekh4">
          <Button></Button>
        </a>
      </div>
      <div className="homework">
      <h2>Proyecto Web.</h2>
        <p>Este proyecto consistía en crear 3 paginas, en una se describía un Hobbie que tuvueramos, nuestra 
          biografía y un rediseño de la pagina principal de Kinal, esto con el fin de tener un nuevo diseño de la 
          página principal de Kinal.
        </p>
        <p className='conocimientos'>Conocimientos</p>
        <p>Considero que este proyecto fue bastante retador, ya que hasta ese momento no era un gran conocedor
          de HTML y CSS, ya que solo sabía lo básico y esto no era suficiente, el realizar este proyecto ha
           hecho que extienda mis conocimientos sobre estos temas, como resultado obtuve una mejoria en mis 
           proyectos.
          <br />
          <br />
          Utilizamos HTML y CSS para crear esta página e incluyendo el uso de un archivo CSS llamado responsive, 
          este archivo modifica la página web y quita los bordes de esta misma.
          <br />
          <br />
          <img src={proyectoWeb} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/myac-2022020_kinal_edu_gt/Epc4c9tj-CxNub4fb58AapsBoYh5dQrmzC1mu2Q5oMX2BA?e=DY5Xvp">
          <Button></Button>
        </a>
      </div>
      <div className="homework">
      <h2>Adoption System</h2>
        <p>Este proyecto consta de un sistema hecho con JS, Mongoose, Express y MongoDBCompass, este proyecto
          gestiona una tienda de adopción de mascotas, esto haciendo un CRUD, teniendo también en cuenta que
          MongoDBCompass es un gestor de base de datos no relacionales.
        </p>
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto fue una base para ver como se puede usar un gestor de base de datos de forma diferente
           a MySQL, el usar JS junto con Thunder para poder comunicar los datos con la DB fue algo nuevo, e 
           incluso agrega experiencia a mi carrera.
          <br />
          <br />
          Utilizamos JS, Thunder Client y MongoDBCompass para poder hacer un CRUD el cuál guarda los datos que se le envien.
          <br />
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/myac-2022020/adoptionSystem.git">
          <Button></Button>
        </a>
      </div>
      <div className="homework">
      <h2>Proyecto Bimestral</h2>
        <p>Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro
          de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos
          secciones principales, administrador y cliente, cada uno con funcionalidades específicas las cuales se detallan a
          continuación
        </p>
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto fue una base para ver como se puede usar un gestor de base de datos de forma diferente
           a MySQL, el usar JS junto con Thunder para poder comunicar los datos con la DB fue algo nuevo, e 
           incluso agrega experiencia a mi carrera.
          <br />
          <br />
          Utilizamos JS, Thunder Client y MongoDBCompass para poder hacer un CRUD el cuál guarda los datos que se le envien.
          <br />
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/myac-2022020/Proyecto.git">
          <Button></Button>
        </a>
      </div>
    </div>
  )
}