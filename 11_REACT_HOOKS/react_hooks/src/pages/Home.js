import React from 'react'

//contexto
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

//import hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/useReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseEffectLayout from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import SomeComponent from '../components/SomeComponent'
import HookCustom from '../components/HookCustom'

const Home = () => {

    const {contextValue} = useContext(SomeContext)

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>Context Value:</h2>
        <p>{contextValue}</p>
        <hr />
        <HookUseRef/>
        <hr />
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseEffectLayout/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home