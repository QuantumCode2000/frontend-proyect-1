import { createContext } from "react"
import { userData } from "../data/UserData";

const UserContext = createContext(null);

const dataUser = userData;

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={ dataUser }>
            { children }
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;
