import "./UserCreate.styles.css"
import TableTitle from "../../modules/TableTitle"
import TableContent from "../../modules/TableContent"
import { useContext } from "react"
import UsersContext from "../../contexts/UsersContext"
import { useState } from "react"

const UserCreate = () => {
    const data = useContext(UsersContext);
    const [viewCreateUser, setCreateUser] = useState(false);
    const dataTitle = ["Id", "Nombre/s", "Apellido Paterno", "Apellido Materno", "Correo", "Contraseña", "Tipo de Usuario", "Accion"]
    const objects = data;
    const initData = {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        correo: "",
        contraseña: "",
        tipoUsuario: "",
    }
    const [valuesForm, setValuesForm] = useState(initData);

    console.log(valuesForm);

    const handleViewCreateUser = () => {
        setCreateUser(!viewCreateUser);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newValues = {
            ...valuesForm,
            [name]: value,
        };
        setValuesForm(newValues);
    }

    const cleanForm = () => {

        handleViewCreateUser();
        addUser();
        setValuesForm(initData);
    }

    const addUser = () => {
        const newValues = {
            ...valuesForm,
            id: objects.length + 1,
        };
        setValuesForm(newValues);
        objects.push(newValues);
        console.log(objects);
    }
    return (
        <main className="window-content user-create-box">
            <div className="user-create">
                <h2 className="title-user-create">Crear Usuario</h2>
                <form action=""
                    onSubmit={
                        handleSumbit
                    }
                >
                    <h3 className="content-letter-user-create">Nombre/s:</h3>
                    <input
                        type="text" className="form-user-create"
                        id="nombre"
                        name="nombre"
                        value={ valuesForm.nombre }
                        onChange={ handleChange }
                    />
                    <h3 className="content-letter-user-create">Apellido Paterno:</h3>
                    <input type="text" className="form-user-create"
                        id="apellidoPaterno"
                        name="apellidoPaterno"
                        value={ valuesForm.apellidoPaterno }
                        onChange={ handleChange }

                    />
                    <h3 className="content-letter-user-create">Apellido Materno:</h3>
                    <input type="text" className="form-user-create"
                        id="apellidoMaterno"
                        name="apellidoMaterno"
                        value={ valuesForm.apellidoMaterno }
                        onChange={ handleChange }

                    />
                    <h3 className="content-letter-user-create">Correo:</h3>
                    <input type="text" className="form-user-create"
                        id="correo"
                        name="correo"
                        value={ valuesForm.correo }
                        onChange={ handleChange }
                    />
                    <h3 className="content-letter-user-create">Contraseña:</h3>
                    <input type="text" className="form-user-create"
                        id="contraseña"
                        name="contraseña"
                        value={ valuesForm.contraseña }
                        onChange={ handleChange }
                    />
                    <h3 className="content-letter-user-create">Tipo de Usuario:</h3>
                    <input type="text" className="form-user-create"
                        id="tipoUsuario"
                        name="tipoUsuario"
                        value={ valuesForm.tipoUsuario }
                        onChange={ handleChange }
                    />
                    <button onClick={
                        cleanForm
                    }
                        type="submit" className="boton">Crear</button>
                </form>
            </div>

            {/* <table className="table-user">
                <TableTitle prop={ dataTitle } />
                <TableContent prop={ objects } />
            </table> */}
        </main >
    )
}

export default UserCreate