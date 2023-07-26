import './App.css';

//componentes
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
import State from './components/State';
import { createContext } from 'react';

import Context from './components/Context';

type textOrNull = string | null

//9 -  context
interface IAppContext {
  language :string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext |null>(null)

function App() {
  const name: string = "Eduardo"
  const age: number = 30
  const isWorking: boolean = true

  const userGreeting = (name: string):string => {
    return `Olá, ${name}!`;
  }

  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText:textOrNull = null
  
  mySecondText = "opa"

  const contextValue:IAppContext = {
    language: "JS",
    framework: "React",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
        <div className="App">
        <h1>TypeScript com React</h1>    
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está funcionando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo" />
        <Destructuring 
        title="Primeiro Post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "react"]}
        category={Category.ts}
        />
        <State/>
        {myText &&
          <p>TEm texto aqui</p>
        }
        {mySecondText &&
          <p>TEm texto na variável</p>
        }
        <Context/>
      </div>
    </AppContext.Provider>

  );
}

export default App;
