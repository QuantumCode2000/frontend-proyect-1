import { createContext } from "react"
import { UsersData } from "../data/UsersData";

const UsersContext = createContext(null);

const data = UsersData;


const UsersProvider = ({ children }) => {
    return (
        <UsersContext.Provider value={ data }>
            { children }
        </UsersContext.Provider>
    )
}

export { UsersProvider };
export default UsersContext;




