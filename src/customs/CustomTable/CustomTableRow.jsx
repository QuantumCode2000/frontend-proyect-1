import PropTypes from "prop-types";


const CustomTableRow = ({ data }) => {
    const objects = data;
    console.log(objects);
    return (
        <>
            { objects.map((object) => (
                <tr key={ object.id }>
                    <td>{ object.id }</td>
                    <td>{ object.numeroIdentificacion }</td>
                    <td>{ object.nombre }</td>
                    <td>{ object.apellidoPaterno }</td>
                    <td>{ object.apellidoMaterno }</td>
                    <td>{ object.correo }</td>
                    <td>{ object.contraseña }</td>
                    <td>{ object.tipoUsuario }</td>
                </tr>
            )) }
        </>
    )
}

CustomTableRow.propTypes = {
    data: PropTypes.object,
}

export default CustomTableRow