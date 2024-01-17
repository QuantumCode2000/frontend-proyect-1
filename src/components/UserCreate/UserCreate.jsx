
import "./UserCreate.styles.css"
import { useContext } from "react"
import UsersContext from "../../contexts/UsersContext"
import { useState } from "react"
import CustomInput from "../../customs/CustomInput/CustomInput"
import { MdDriveFileRenameOutline, MdEmail, MdPassword } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import CustomButton from "../../customs/CustomButton/CustomButton"
const UserCreate = () => {
    const data = useContext(UsersContext);
    const [viewCreateUser, setCreateUser] = useState(false);
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
                <h2 className="title-user-create">Ingrese los datos del nuevo personal</h2>
                <form action=""
                    onSubmit={
                        handleSumbit
                    }
                >

                    <CustomInput
                        icon={ <MdDriveFileRenameOutline /> }
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        value={ valuesForm.nombre }
                        onChange={ handleChange }
                        name="nombre"
                    />
                    <CustomInput
                        icon={ <MdDriveFileRenameOutline /> }
                        label="Apellido Paterno"
                        placeholder="Ingrese su apellido paterno"
                        value={ valuesForm.apellidoPaterno }
                        onChange={ handleChange }
                        name="apellidoPaterno"
                    />
                    <CustomInput
                        icon={ <MdDriveFileRenameOutline /> }
                        label="Apellido Materno"
                        placeholder="Ingrese su apellido materno"
                        value={ valuesForm.apellidoMaterno }
                        onChange={ handleChange }
                        name="apellidoMaterno"
                    />
                    <CustomInput
                        icon={ <MdEmail /> }
                        label="Correo"
                        placeholder="Ingrese su correo"
                        value={ valuesForm.correo }
                        onChange={ handleChange }
                        name="correo"
                    />
                    <CustomInput
                        icon={ <MdPassword /> }
                        label="Contraseña"
                        placeholder="Ingrese su contraseña"
                        value={ valuesForm.contraseña }
                        onChange={ handleChange }
                        name="contraseña"
                    />
                    <CustomInput
                        icon={ <GrUserWorker /> }
                        label="Tipo de Usuario"
                        placeholder="Ingrese su tipo de usuario"
                        value={ valuesForm.tipoUsuario }
                        onChange={ handleChange }
                        name="tipoUsuario"
                    />

                    <CustomButton
                        content="Crear"
                        onClick={ cleanForm }
                        type="submit"
                    />
                </form>
            </div>

        </main >
    )
}

export default UserCreate
