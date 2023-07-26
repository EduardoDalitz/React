import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
  //1- useState
    let userName = "Eduardo"

    const [name, setName] = useState("João")

    const atualizaNome = (e) => {
        e.preventDefault()

        userName = "EDUARDO2"

        setName("JOÃO2")

    }

    //2 - useState input

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)

    }

    const [age, setAge] = useState(18)

    return (
    <div>
      <hr />
        {/* 1 useState*/}
        <h4>O nome de usuário é: {userName}</h4>
        <hr />
        <h4>O useState é: {name}</h4>
        <button onClick={atualizaNome}>Clique aqui para alterar</button>


        {/* 2 useState input*/}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos! </p>
    </div>
  )
}

export default HookUseState