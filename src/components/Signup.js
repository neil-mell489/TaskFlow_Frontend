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
        
        <div className="form-container p-10 flex justify-center">
            <h1 className="pr-5">Register Your Account: </h1>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleChange}/>
                </span>
                <span>                
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange}/>
                    </span>
                <span className="pr-3">                
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" autoComplete="true" onChange={handleChange}/>
                </span>
                    <input type="submit" value="Sign Up" className="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-md"/>
            </form>
        </div>

    )
}

export default Signup