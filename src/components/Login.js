import { useState } from "react";

const Login = (props) => {
    const [form, setForm] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // log the user in on submit
        let submission = await props.handleLogin(form);
        if (submission) {
            setErrorMsg(submission.error);
        }
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    return (
        <div className="form-container flex flex-col justify-center content-center items-center m-10">
            <h1 className="p-5">Welcome Back! (to TaskFlow)</h1>
            <form onSubmit={handleSubmit}>
                <div className="p-2">
                    <span>
                        <label htmlFor="username">Username: </label>
                        <div>
                        <input type="text" name="username" onChange={handleChange} placeholder="Enter Username"/>                            
                        </div>
                    </span>
                </div>
                <div className="p-2">
                    <span>                
                        <label htmlFor="email">Email: </label>
                        <div>
                        <input type="email" name="email" onChange={handleChange} placeholder="Enter Email"/>                            
                        </div>
                    </span>
                </div>
                <div className="p-2">
                    <span>                
                        <label htmlFor="password">Password: </label>
                        <div>
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter Password"/>                            
                        </div>
                    </span>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-md m-3">Login</button>                    
                </div>

            </form>
            {/* inside the form div display the error message in red */}
            {errorMsg ? <h4 style={{color: "red"}}>{errorMsg}</h4> : ""}
        </div>
    );
};

export default Login;
