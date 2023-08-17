import { createContext, useState } from "react";

export const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
    const [ userID, setUserID ] = useState( 1 );
    const [ fullName, setFullName ] = useState("Vincent Gaspay");

    return(
        <WebsiteContext.Provider value={{
            context_userID: [ userID, setUserID ],
            context_fullName: [ fullName, setFullName ]
        }}>
            {children}
        </WebsiteContext.Provider>
    );
}