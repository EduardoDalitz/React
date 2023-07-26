import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Eduardo", "Pedro", "Josias"]);
    
  const [users, setUsers] = useState([
    {id: 1, name:"Eduardo", age:23},
    {id: 2, name: "Joao", age: 28},
    {id: 3, name: "Pedro", age: 30},
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    } );

  };

  return (
    <div>
        <ul>
            {list.map((item, indice) => (
                <li key={indice}>{item}</li>
            ))}
        </ul>

        <ul>
          {users.map((user)=>(
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default ListRender;