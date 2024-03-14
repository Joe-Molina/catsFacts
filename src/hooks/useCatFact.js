import {useEffect, useState} from 'react'
import {GetFact} from '../services/facts'

export const useCatFact = () => {
    const [fact, setFact] = useState() 

    const refreshFact = async() => {
        const newFact = await GetFact()
        setFact(newFact)
    }

    useEffect(refreshFact, [])

    return {fact, refreshFact}
}