import { useState } from "react";

const Register = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword  ] = useState("");
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ age, setAge ] = useState("");

    const [ error, setError ] = useState("");
    const [ successMessage, setSuccessMessage ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //input trappings and validations here...

        const register = { username, password, first_name: firstname, last_name: lastname, gender, age };

        fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(register)
        }).then( (res) => res.json() )
        .then( (res_data) => {
            if( 'suc_msg' in res_data ) {
                setSuccessMessage(res_data.suc_msg);
                setError("");

                setUsername("");
                setPassword("");
                setFirstname("");
                setLastname("");
                setGender("");
                setAge("");
            } else if( 'err_msg' in res_data ) {
                setError( res_data.err_msg );
            } else {
                setError("Something went wrong!");
            }
        })
        ;
    }

    return(
        <div className="register container mt-5">
            <h1>Register</h1>
            
            { error &&
                <div className="mt-4">
                    <span style={{ color: "red" }}>{ error }</span>
                </div>
            } { successMessage &&
                <div className="mt-4">
                    <span style={{ color: "blue" }}>{ successMessage }</span>
                </div>
            }

            <form>
                <div className="mt-4">
                    <input className="form-control" type="text" placeholder="Username/Email"
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }
                    />
                </div>
                <div className="mt-2">
                    <input className="form-control" type="password" placeholder="Password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <div className="mt-4">
                    <input className="form-control" type="text" placeholder="First name"
                        value={ firstname }
                        onChange={ (e) => setFirstname(e.target.value) }
                    />
                </div>
                <div className="mt-2">
                    <input className="form-control" type="text" placeholder="Last name"
                        value={ lastname }
                        onChange={ (e) => setLastname(e.target.value) }
                    />
                </div>
                <div className="mt-2">
                    <select className="form-control" value={ gender } onChange={ (e) => setGender(e.target.value) }>
                        <option value="">Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div className="mt-2">
                    <input className="form-control" type="text" placeholder="Age"
                        value={ age }
                        onChange={ (e) => setAge(e.target.value) }
                    />
                </div>

                <div className="mt-2">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;