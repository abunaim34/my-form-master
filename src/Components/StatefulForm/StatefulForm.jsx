import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Abu Naim')
    const [email, setEmail] = useState(null)
    const [password, setPassoward] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 6){
            setError('Password must be 6 charecters or longer')
        }else{
            setError('')
        }
        console.log(email)
        console.log(password, name)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassoward(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;