import { Button } from "./Button.jsx"

export const PracticeContent = () => {
  return (
    <div className='container-theme'>
      <div className="homework">
        <h1>Agenda Web.</h1>
        <p>Este proyecto se basa en una agenda que funciona con JS, se puede guardar, editar y eliminar cualquier
          nota que le agreguemos.
        </p>
        <p className='conocimientos'>Conocimientos.</p>
        <p>Los conocimientos adquiridos en este proyecto fueron de Javascript puro, CSS y HTML. Este proyecto me 
          ha expandido los conocimientos acerca del lenguaje de programacion.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
        <a href="https://cetkinal-my.sharepoint.com/:u:/g/personal/myac-2022020_kinal_edu_gt/EUolUMbFOU1OlLwFDHEe_aABA0gcph2ZP4VFrOO4corXiA?e=s9J1lE">
          <Button></Button>
        </a>
      </div>
      <div className="homework">
        <h1>Academy Control.</h1>
        <p>Este proyecto se basa en Javascript, NodeJS, MongoDBCompass, express y mongoose. Este fue el primer proyecto
          oficial que se hizo con conexion a la DB.
        </p>
        <p className='conocimientos'>Conocimientos.</p>
        <p>Los conocimientos adquiridos en este proyecto fueron de Javascript puro, NodeJS y MongoDBCompass. Adquiriendo
          experiencia con la conexion a la base de datos, esto haciendo consultas de una forma nueva, ya que
          MongoDBCompass es NoSQL.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
        <a href="https://github.com/myac-2022020/academyControlFinished.git">
          <Button></Button>
        </a>
      </div>
      <div className="homework">
        <h1>Gestor de opiniones.</h1>
        <p>Este proyecto se basa en Javascript, NodeJS, MongoDBCompass, express y mongoose. Este fue el segundo proyecto
          oficial que se hizo con conexion a la DB.
        </p>
        <p className='conocimientos'>Conocimientos.</p>
        <p>Los conocimientos adquiridos en este proyecto fueron de Javascript puro, NodeJS y MongoDBCompass. Adquiriendo
          experiencia con la conexion a la base de datos, esto haciendo consultas de una forma nueva, ya que
          MongoDBCompass es NoSQL.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
        <a href="https://github.com/myac-2022020/ControlOpinions.git">
          <Button></Button>
        </a>
      </div>
    </div>
  )
}
