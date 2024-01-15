import "./Perfil.styles.css"
const Perfil = () => {
    return (
        <body>
        <main className="container">
             <div className="box1">
                <h1 className="header-title">Perfil</h1>
             </div>
             <div className="box2">
                <h2 className="body-title">Panel</h2>
             </div>
             <div className="box3">
                <h2>Datos</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="rounded-circle" width={150}></img>
                
                
                <h3></h3><button>Cargar Imagen</button>
                <h3>Nombre del usuario</h3>
                <p>Correo</p>
                <p>Tipo de Usuario</p>
             </div>
             <div className="box4">
                <h2>Información</h2>
                <th>Nombre/s:</th>
                <th>Jorge Luis</th> 
                <th>Apellido Paterno:</th>
                <th>Tancara</th> 
                <th>Apellido Materno:</th>
                <th>Tancara</th> 
                <th>Correo:</th>   
                <th>jorgetancara@gmail.com</th>
                <th>Contraseña:</th>   
                <th>xxxxxxxxxx</th>
                <th>Tipo de Usuario:</th>   
                <th>Administrador</th>
                <h1></h1><button>Actualizar Información</button>
             </div>
        </main>
        </body>
    )
}

export default Perfil