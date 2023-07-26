import React, { useState } from 'react'

    const CondicionalRender = () => {
        const [x] = useState(false);
        
        const [name, setName] = useState("João")
    
        return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se X for true, sim!</p>}
            {!x && <p>Se X for false, não!</p>}


            {name === "João"? (
                <div>O nome é João!</div>
            ):(
                <div>O nome <strong>NÃO</strong> foi encontrado: {name}</div>
            )}

            <button onClick={() => {
                setName("João")
            }}>Clique aqui! </button>

        </div>

  );
};

export default CondicionalRender