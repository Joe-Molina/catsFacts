export const FirstWords =  (fact) => {

    const separate = fact.split(' ', 4).join(' ')
    const words = `las primeras 4 palabras son: ${separate}`

    return words
}