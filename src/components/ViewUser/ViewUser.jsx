import TableContent from "../../modules/TableContent"
import TableTitle from "../../modules/TableTitle"
import { useContext } from "react"
import UsersContext from "../../contexts/UsersContext"
import CustomInput from "../../customs/CustomInput/CustomInput"
import CustomButton from "../../customs/CustomButton/CustomButton"
import CustomTable from "../../customs/CustomTable/CustomTable"
import "./ViewUser.styles.css"
const ViewUser = () => {
  const dataTitle = ["Id", "Nombre/s", "Apellido Paterno", "Apellido Materno", "Correo", "Contraseña", "Tipo de Usuario", "Accion"]
  const data = useContext(UsersContext);
  return (
    <main className=" window-content user-create-box">
      <div className="search_elements">
        <CustomInput
          placeholder="Inserte Numero de Identificacion"
          type="number"
        />
        <CustomButton
          content="Buscar"
        />
      </div>
      <CustomTable />
      <table className="table-user">
        <TableTitle prop={ dataTitle } />
        <TableContent prop={ data } />
      </table>
    </main >
  )
}

export default ViewUser