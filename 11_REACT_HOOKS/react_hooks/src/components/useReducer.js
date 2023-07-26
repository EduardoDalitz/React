import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    //1 - começando com o useReducer

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    //2 - Avançando com o useReducer
    const initialTasks = [
        {id:1, text: "Fazer alguma coisa"},
        {id:2, text: "Fazer outra coisa"}
    ]

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText("")

                return [...state, newTask]

            case "DELETE":
                return state.filter((task)=>task.id !== action.id)
            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks ] = useReducer(taskReducer, initialTasks)
    

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type : "ADD"})
    }

    const removeTaks = (id) =>{

        dispatchTasks({type: "DELETE", id: id})
    }

  return (
    <div>
         <hr/>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Gerar número aleatório</button>
        <hr/>

        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit} >
            <input type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>

        {tasks.map((task) => (
            <li key={task.id} 
                onDoubleClick={() => removeTaks(task.id)}>
                {task.text}
            </li>
        ))}


    </div>
  )
}

export default HookUseReducer