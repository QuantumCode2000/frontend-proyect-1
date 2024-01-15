import "./Login.styles.css"
const Login = () => {
    return (
        <div className="container-login">
        <main className="container-log">
        <div className="box1-login">
                <h1 className="header-login">Inicio</h1>
             </div>
             <div className="box2-login">
                <h2>Inicio de Sesión</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/2919/2919600.png" className="rounded-circle" width={150}></img>
                <form action="">Ingreso de Datos</form>
                <h3>Usuario</h3>
                <input type="text"  />
                <h3>Contraseña</h3>
                <input type="text"  />
                <button className="button-login">Iniciar Sesión</button>
             </div>
        </main>
        </div>
    )
}

export default Login