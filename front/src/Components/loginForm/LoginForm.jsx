import React, { useState } from 'react'
import './LoginForm.css'
import axios from 'axios'

const LoginForm = () => {
    const [data, setData] = useState({
        email : '',
        pwd : ''
    })
    const handleClick = ()=>{
        axios.post('http://localhost:9000/api/login',data).then(res => {
            console.log(res.data.msg)
        }).catch(err => {
            console.error(err.response.data.msg)
        })
    }

    const handleChange = e => {
        setData(prev => {
            let obj = {}
            obj = {...prev}
            obj[e.target.name] = e.target.value
            return obj
        })
        

    }
  return (
    <div id = 'loginForm'>
        <p htmlFor='email'>Email</p>
        <input type = 'email' id='email' name='email' onChange={e => handleChange(e)}/>
        <p htmlFor="password">password</p>
        <input type = 'password' id='password' name='pwd' onChange={e => handleChange(e)}/>

        <button type='button' onClick={handleClick} className='submitButton'>Login</button>
    </div>
  )
}

export default LoginForm