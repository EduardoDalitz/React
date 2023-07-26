import './App.css';
import MyForm from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Eduardo", email:"eduardo@brascola.com.br"}}/>
    </div>
  );
}

export default App;
