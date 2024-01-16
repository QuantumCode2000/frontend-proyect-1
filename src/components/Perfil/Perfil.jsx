import "./Perfil.styles.css"
import UserContext from "../../contexts/UserContext"
import { useContext } from "react";
const Perfil = () => {
   const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      correo,
      contraseña,
      tipoUsuario,
   } = useContext(UserContext);

   return (

      <div className="window-content container-perfil">
         <main className="container">
            <div className="datos-box">
               <h2>Datos</h2>
               <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="rounded-circle" width={ 150 }></img>
               <h3></h3><button>Cargar Imagen</button>
               <h3>{
                  nombre + " " + apellidoPaterno + " " + apellidoMaterno

               }</h3>
               <p>{ correo }</p>
               <p>{ tipoUsuario }</p>
            </div>
            <div className="informacion-box">
               <h2>Información</h2>
               <h3>Nombre</h3>
               <p>{ nombre }</p>
               <h3>Apellido Paterno</h3>
               <p>{ apellidoPaterno }</p>
               <h3>Apellido Materno</h3>
               <p>{ apellidoMaterno }</p>
               <h3>Correo</h3>
               <p>{ correo }</p>
               <h3>Contraseña</h3>
               <p>{ contraseña }</p>
               <h3>Tipo de Usuario</h3>
               <p>{ tipoUsuario }</p>
               <button className="button-perfil">Editar</button>
            </div>
         </main>
      </div>


   )
}

export default Perfil