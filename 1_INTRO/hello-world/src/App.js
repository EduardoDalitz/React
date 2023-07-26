// Logo
import logo from './logo.svg';
//import logo512 from "./assets/logo512.png";


//Components
import UserDetails from './components/UserDetails';
//import Message from './components/Message';
//import ChangeMessageState from './components/ChangeMessageState';
//import ExecuteFunction from './components/ExecuteFunction';
//import Container from './components/Container';
//import Fragment from './components/Fragment';
//import CarDetails from './components/CarDetails';
//import ShowUserName from './components/ShowUserName';
//import CondicionalRender from './components/CondicionalRender';
//import ListRender from './components/ListRender';
//import ManageData from './components/ManageData';
//import FirstComponent from './components/FirstComponent';
//import TemplateExpressions from './components/TemplateExpressions';
//import MyComponent from './components/MyComponent';
//import Events from './components/Events';
//import Challenge from './components/Challenge';

//Style/css
import './App.css';
//import { useState } from 'react';


function App() {
  //const cars = [
  //  {id: 1, brand:"Ferrari", color:"Amarelo", newCar: true, km:0},
  //  {id: 2, brand:"Lambo", color:"Verde", newCar: false, km:150},
  //  {id: 3, brand:"Ford", color:"Azul", newCar: false, km:250},
  //]
  
  //function showMessage() {
   // console.log("Evento do componente pai!")
  //}


  //const [message,setMessage] = useState("")

  //const handleMessage = (msg) => {
  //  setMessage(msg)
  //}

  const users = [
    {id: 1, name:"Eduardo", age: 23, job: "Analista"},
    {id: 2, name:"Vitoria", age: 24, job: "adm"},
    {id: 3, name:"Teste", age: 17, job: "professora"},

  ]

  return (
    <div className="App">
    
    {users.map((user)=>(
      <UserDetails 
        key={user.id}
        name={user.name} 
        age={user.age} 
        job={user.job}
      />
    ))}

    
      <img src={logo} className="App-logo" alt="logo" />
      
      <h1>
        Fundamentos React
      </h1>    

      
      {/*
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      <Container>
      <p>Este é conteúdo do container</p>

      </Container>
      <ExecuteFunction myFunction={showMessage}/>

      <Fragment propFragment="Teste"/>

      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      
      <CarDetails brand="VW" km={1000} color="Blue" newCar={true} />

      <CarDetails brand="Ford" km={90000} color="White" newCar={false} />


      <ShowUserName name="Eduardo"/>

      <CondicionalRender/>
      
      <ManageData/>

     <ListRender/>

      <div>
        <img src="/1088537.png" alt="Teste" />
        <img src={logo512} alt="assets" />
      </div>
      <MyComponent/>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>

      <p>Elemento desafio</p>
      */}
      
    </div>
  );
}

export default App;

