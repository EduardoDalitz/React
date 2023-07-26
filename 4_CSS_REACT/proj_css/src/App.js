//import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import Title from './Components/Title';

function App() {

  const n=1

  const redTitle = true

  const myCars = [
    {id:1, modelo: "Ford", ano: 2016},
    {id:2, modelo: "VW", ano: 2010},
    {id:3, modelo: "GM", ano: 2019},
  ]

  return (

    <div className="App">

      
      {/*CSS Global*/}
      {/*<img src={logo} className="App-logo" alt="logo" /> */}
      <h1>React com CSS</h1>
      
      {/* CSS de componentes */}
      <MyComponent/>

      {/* Inline CSS */}
      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red"}}>Este elemento é estilizado com inline</p>

      {/*Css inline dinâmico */}
      <h2 style={n <10 ? {color:"purple"}:{color:"pink"}}>CSS dinâmico</h2>
    
      {/*Class dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/*CSS Modules  <Title/>*/}
      

      <div className='car-container'>
        {myCars.map((car) => (
              <Title key={car.id} car={car}/>
          ))}

      </div>

      

    </div>
  );
}

export default App;
