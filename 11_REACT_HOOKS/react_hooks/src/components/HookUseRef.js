import { useEffect, useState, useRef } from "react"

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)


    useEffect(()=>{
        numberRef.current = numberRef.current + 1
    })

    //2 useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setText("")

        inputRef.current.focus()

    }

  return (
    <div>
        {/* 1 - useRef */}
        <h2>HookUseRef</h2>
        <p>O componente renderizou: {numberRef.current} vezes</p>
        <p>O counter 1: {counter} </p>
        <button onClick={() => {setCounter(counter+1)}}>Contador A</button>
        <p>O counter 2: {counterB} </p>
        <button onClick={() => {setCounterB(counterB+1)}}>Contador B</button>
        <hr />
        {/* 2 - useRef e DOM*/}
        <h4>useRef</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            ref={inputRef} 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}

export default HookUseRef