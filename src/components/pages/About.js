import { useState } from "react";

import ListPersons from "../ListPersons";

const About = () => {
    const [persons, setPersons] = useState([
        { first_name: 'Jason', last_name: 'Ordiz', id: 1 },
        { first_name: 'Peter', last_name: 'Trurnit', id: 2 },
        { first_name: 'Athena', last_name: 'Llamera', id: 3 }
    ]);

    return(
        <div className="about container mt-5">
            <h1>This is the about page.</h1>
            <p>This website is all about Node.js + Express.js + PostgreSQL.</p>

            <ListPersons persons={persons} />
        </div>
    );
}

export default About;