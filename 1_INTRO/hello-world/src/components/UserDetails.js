const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>Nome:{name}</h2>
        <h2>Idade:{age}</h2>
        <h2>Profissão{job}</h2>
        {
        age >=18 ? (
        <p>Pode dirigir!</p>
        ):(<p>Não pode dirigir</p>)
        }

    </div>
    
)}

export default UserDetails