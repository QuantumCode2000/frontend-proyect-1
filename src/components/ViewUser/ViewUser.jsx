import TableContent from "../../modules/TableContent"
import TableTitle from "../../modules/TableTitle"
import { useContext, useState } from "react"
import UsersContext from "../../contexts/UsersContext"

const ViewUser = () => {
  const dataTitle = ["Id", "Nombre/s", "Apellido Paterno", "Apellido Materno", "Correo", "Contraseña", "Tipo de Usuario", "Accion"]
  const data = useContext(UsersContext);
  const [search, setSearch] = useState("");
  const [userSearch, setUserSearch] = useState(data);


  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    setSearch(value);
    searchUser();
  }
  const searchUser = () => {
    const user = userSearch.filter((item) => item.nombre === search);
    setUserSearch(user);
  }


  console.log(search);

  return (
    <main className=" window-content user-create-box">

      <div className="search-box">
        <input type="text"
          value={ search }
          onChange={ handleChange }

        />
        <button>Buscar Usuario</button>
      </div>

      <table className="table-user">
        <TableTitle prop={ dataTitle } />
        <TableContent prop={ userSearch } />
      </table>
    </main >
  )
}

export default ViewUser