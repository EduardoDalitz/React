const Challenge = () => {
    var num1 = 2;
    var num2 = 1;

    const somar = () => {
        const soma = num1 + num2;

        return console.log(soma);
    };

    return(
        <div>
            <div>
                Valor:{num1} <br/> Valor: {num2}
            </div>
            <div>
                <button onClick={somar}>Somar</button>
            </div>
            
        </div>
    )
};

export default Challenge;