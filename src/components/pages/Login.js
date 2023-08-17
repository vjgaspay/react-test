import { useState, useRef, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const usernameRef = useRef();

    useEffect( () => {
        usernameRef.current.focus();
        usernameRef.current.setAttribute("placeholder", "Enter username here");
    }, [] );

    const [ username, setUsername ] = useState("");
    const [ password, setPassword  ] = useState("");

    const [ error, setError ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //input trappings and validations here...

        const login = { username, password };

        fetch("/api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        }).then( (res) => res.json() )
        .then( (res_data) => {
            if( 'successful_login' in res_data && res_data.successful_login ) {
                navigate("/profile");
            } else {
                setError("Something went wrong!");
            }
        })
        ;
    }

    return(
        <div className="login container mt-5">
            <h1>Login</h1>
            
            { error &&
                <div className="mt-4">
                    <span style={{ color: "red" }}>{ error }</span>
                </div>
            }

            <form>
                <div className="mt-4">
                    <input ref={usernameRef} className="form-control" type="text" placeholder="Username/Email"
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

                <div className="mt-2">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </div>
            </form>

            <Link to="/login/purpose">Show purpose</Link>
            <Routes>
                <Route path="purpose" element={
                    <div className="login-purpose">
                        <h3>Purpose</h3>
                        <p>You need to login for you to be authenticated.</p>
                    </div>
                } />
            </Routes>
        </div>
    );
}

export default Login;