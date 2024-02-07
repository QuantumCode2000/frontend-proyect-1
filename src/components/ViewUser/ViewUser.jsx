
// import TableContent from "../../modules/TableContent"
// import TableTitle from "../../modules/TableTitle"
import { useContext } from "react"
import UsersContext from "../../contexts/UsersContext"
import CustomInput from "../../customs/CustomInput/CustomInput"
import CustomButton from "../../customs/CustomButton/CustomButton"
import CustomTable from "../../customs/CustomTable/CustomTable"
import "./ViewUser.styles.css";
import { userHeadersTable } from "../../utils/headersTable"
const ViewUser = () => {
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
      <CustomTable
        headerData={ userHeadersTable }
        bodyData={ data }
      />
    </main >
  )
}

export default ViewUser

