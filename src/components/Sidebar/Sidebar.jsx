import './Sidebar.styles.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {

    return (

        <div className="sidebar">
            <div className="perfil-usuario">
                <img src="data:image/jpeg;base64,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" alt="" className="foto-usuario" />
                <div className="text-perfil nome-usuario">Nome do Usuário</div>
                <div className="text-perfil rol-usuario">Rol usuario</div>
            </div>
            <div className="opciones-sidebar">
                <Link to="/perfil">
                    <div className="opcion-sidebar">
                        <div className="text-opcion">

                            Perfil
                        </div>
                    </div>
                </Link>
                <Link to="/crear-usuarios">
                    <div className="opcion-sidebar">
                        <div className="text-opcion">Crear Usuarios</div>
                    </div>
                </Link>

                <Link to="administrar-usuarios">
                    <div className="opcion-sidebar">
                        <div className="text-opcion">Administrar usuarios</div>
                    </div>
                </Link>
                <Link to="ver-usuarios">
                    <div className="opcion-sidebar">
                        <div className="text-opcion">Ver usuarios</div>
                    </div>
                </Link>
                <Link to="/cerrar-sesion">
                    <div className="opcion-sidebar">
                        <div className="text-opcion">Cerrar sesión</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar