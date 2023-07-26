import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Fim de jogo</h1> 
        <h2>A sua pontuação foi: <span> {score} </span></h2>
       <p>Clique no botão para reiniciar a jogar</p>
       <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver