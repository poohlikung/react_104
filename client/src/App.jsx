import React from 'react'
import FormInput from "./components/FormInput"
import Kaika from './components/Kaika'
import ListBasic from './components/ListBasic'
const App = () => {
  return (
    <>
      <FormInput/>
      <Kaika firstname="sorawit" lastname="wansen" />
      
      <ListBasic></ListBasic>
    </>
  )
}

export default App