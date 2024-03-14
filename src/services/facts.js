const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'

export const GetFact = async () => {
   const res = await fetch(CAT_ENDPOINT_FACT_URL)
    const data = await res.json()
    const { fact } = data
    return fact
}