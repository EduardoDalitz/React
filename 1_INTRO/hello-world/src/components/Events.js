const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if (x){
            return <h1>REnderizou isso no if do rendeSomething</h1>;
        } else {
            return <h1>Tembém posso renderizar isso! else do RenderSomething</h1>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={()=>{console.log("Clicou2x")}}>
                Clique Aqui também!
                </button>
            </div>

            {renderSomething(true)}
        </div>
    );

};

export default Events;