import { useState } from "react"

const Signup = (props) => {
    const [form, setForm] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSignUp(form)
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return(
        
        <div className="form-container flex flex-col justify-center content-center items-center m-10">
            <h1 className="p-5">Register Your Account: </h1>
            <form onSubmit={handleSubmit}>
                <div className="p-2">
                <span>
                    <label htmlFor="username">Username: </label>
                    <div className="shadow-sm">
                        <input className="shadow-sm" type="text" name="username" onChange={handleChange} placeholder="Enter Username"/>                        
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
                    <input type="password" name="password" autoComplete="true" onChange={handleChange} placeholder="Enter Password"/>                        
                    </div>

                </span>
                </div>
                    <div className="flex justify-center">
                    <input type="submit" value="Sign Up" className="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-md m-3"/>                        
                    </div>

            </form>
        </div>

    )
}

export default Signup