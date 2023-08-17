import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("http://localhost:3001/api/delete-account", {
            method: "DELETE"
        }).then( (res) => res.json() )
        .then( (res_data) => {
            if( 'successful_delete' in res_data && res_data.successful_delete ) {
                navigate("/login");
            } else {
                alert("Unable to delete account.");
            }
        });
    }

    return(
        <div className="profile container">
            <h3>Profile</h3>
            <button onClick={handleClick}>Delete Account</button>
        </div>
    );
}

export default Profile;