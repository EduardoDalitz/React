import "./MyForm.css"
import {useState} from 'react'

const MyForm = ({user}) => {

    // 6 - controlled inputs


    //3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name:"")
    const [email, setEmail] = useState(user ? user.email:"")

    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)

    //console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o form")
        console.log(name, email, bio, role)

        //limpar form
        setName("")
        setEmail("")
        setBio("")
    };
    
    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    return (
    <div>
        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome:"
                    onChange={handleName}
                    value={name}
                />
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail: </span>
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu e-mail" 
                /* 4 - Simplificação do state  */
                onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
            </label>

            {/* 8 - input textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                name="bio" 
                placeholder="Descrição do usuário"
                onChange={(e)=> setBio(e.target.value)}
                value={bio}>

                </textarea>
            </label>
            
            {/* 9 - select  */}
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}

export default MyForm