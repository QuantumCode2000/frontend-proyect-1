import { FaRegEdit } from "react-icons/fa";
import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import "./TableContent.styles.css";
const TableContent = ({ prop }) => {
    const objects = prop;

    return (
        <tbody>
            { objects.map((object) => (
                <tr key={ object.id }>
                    <td>{ object.id }</td>
                    <td>{ object.nombre }</td>
                    <td>{ object.apellidoPaterno }</td>
                    <td>{ object.apellidoMaterno }</td>
                    <td>{ object.correo }</td>
                    <td>{ object.contraseña }</td>
                    <td>{ object.tipoUsuario }</td>
                    <td
                        className="table-content__iconos"
                    >
                        <div>
                            <FaRegEdit />
                        </div>
                        <div><GiPadlockOpen /></div>
                        <div>
                            <HiDotsVertical />
                        </div>
                    </td>
                </tr>
            )) }
        </tbody>
    )
}

export default TableContent