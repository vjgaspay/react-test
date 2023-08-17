import { useParams } from "react-router-dom";

const AboutPerson = () => {
    const { id } = useParams();

    //fetch the person's details via id

    return(
        <div className="about-person container mt-4">
            <h3>About [name]</h3>
            <p>ID: {id}</p>
        </div>
    );
}

export default AboutPerson;