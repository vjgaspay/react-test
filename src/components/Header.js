import { useEffect } from "react";

const Header = ({ title, developer, children }) => {
    useEffect( () => {
        //console.log("Header component is MOUNTED");

        //return () => console.log("Header component is UNMOUNTED");
    }, [] );

    return(
        <div className="header">
            <div className="p-5 bg-primary text-white text-center">
                <h1>{ title }</h1>
                <p>{ developer }</p> 
            </div>

            { children }
        </div>
        
    );
}

export default Header;