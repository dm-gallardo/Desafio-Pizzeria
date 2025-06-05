import { createContext , useState} from "react";

export const TotalContext = createContext()

function TotalProvider({ children }) {

    const [total, setTotal] = useState(0);

    const updateTotal = (nuevoTotal) => {
        setTotal(nuevoTotal);
    };


    return (<TotalContext.Provider value={{total , setTotal , updateTotal}}>
    {children}
    </TotalContext.Provider>
    );
}

export default TotalProvider;
