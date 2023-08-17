import { Link } from "react-router-dom";

const ListPersons = ({ order, persons, handleDelete }) => {
    return(
        <div className="list-persons">
            {/* <h5>Sort Persons by first name in {order} order:</h5> */}
            { persons.map( (person) => (
                <div key={person.id} className="person">
                    <Link to={ "/about/" + person.id }>
                        <span>{ person.first_name }</span> <span>{ person.last_name }</span>
                    </Link>
                    {/* <button onClick={ () => handleDelete(person.id) }>Delete</button> */}
                </div>
            ) ) }
        </div>
    );
}

export default ListPersons;