import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
    data: ""
});

// The children prop needs to be destructured with curly braces
export const AppProvider = ({ children }) => {
    const [data, setData] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setData("DirtyFellsow");
        }, 2000);
    }, []);

    return (
        <AppContext.Provider value={{ data }}>
            {children}
        </AppContext.Provider>
    );
};