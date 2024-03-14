import React, { useEffect, useState } from 'react'
import { useSepare } from './hooks/useSepare'
import {useCatFact} from './hooks/useCatFact'



function App() {
    
    const {fact, refreshFact} = useCatFact()
    const {words} = useSepare({fact})
    
    const handleClick = async () => {
        refreshFact()
    }


  return (
    <main>
        <button onClick={handleClick}>primeras 4 palabras</button>
        <h1>App gatitos</h1>
        {fact && <p>{fact}</p>}
        {words && <p>{words}</p>}
       
    </main>
  )
}

export default App