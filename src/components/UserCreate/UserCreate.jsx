import "./UserCreate.styles.css"
import TableTitle from "../../modules/TableTitle"
import TableContent from "../../modules/TableContent"

const UserCreate = () => {

    const dataTitle = ["Id", "Nombre/s", "Apellido Paterno", "Apellido Materno", "Correo", "Contraseña", "Tipo de Usuario", "Accion"]
    const objects = [
        {
            id: 1,
            name: "Juan Pérez",
            lastName: "Perez García",
            mothersLastName: "García",
            email: "juan.perez@example.com",
            password: "12345678",
            userType: "Administrador",
        },
        {
            id: 2,
            name: "María García",
            lastName: "García López",
            mothersLastName: "López",
            email: "maria.garcia@example.com",
            password: "123456789",
            userType: "Usuario",
        },
    ];
    return (
        <main className="user-create-box">
            <button>Crear Usuario</button>
            <button>Buscar Usuario</button>

            <table className="table-user">
                <TableTitle prop={ dataTitle } />
                <TableContent prop={ objects } />
            </table>
        </main>
    )
}

export default UserCreate