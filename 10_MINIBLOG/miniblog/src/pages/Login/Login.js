import React from 'react'
import styles from "./Login.module.css"

import { useState } from 'react'

import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)

    const user={
      email,
      password
    }

    const res = await login(user)

    console.log(res);

    
  }

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
      <label>
          <span>E-mail:</span>
          <input type="email" 
          name='email'
          required 
          placeholder='E-mail do Usuário' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" 
          name='password' 
          required 
          placeholder='Senha do Usuário'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {authError && <p className="error">{authError}</p>}

      </form>
    </div>
  )
}

export default Login