import { useState, useEffect } from "react"
import {FirstWords} from '../services/4FirstWords'

export function useSepare ({fact}) {
    const [words, setWords] = useState()

    useEffect(() => {
        if(!fact) return
        const words2 = FirstWords(fact)
        setWords(words2)
        
    },[fact])

    return {words}
}
