
const TableContent = ({ prop }) => {
    const objects = prop;

    return (
        <tbody>
            { objects.map((object) => (
                <tr key={ object.id }>
                    <td>{ object.id }</td>
                    <td>{ object.name }</td>
                    <td>{ object.lastName }</td>
                    <td>{ object.mothersLastName }</td>
                    <td>{ object.email }</td>
                    <td>{ object.password }</td>
                    <td>{ object.userType }</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                        <button>Permisos</button>
                        <button>Estado</button>
                    </td>
                </tr>
            )) }
        </tbody>
    )
}

export default TableContent