const cogerArmas = async (limit) => {
    const traerArmas = await fetch (`https://eldenring.fanapis.com/api/weapons?limit=100=${limit}`)
    const armas = await traerArmas.json()
    return armas.results
}

const unArma = async (nombreArma) => {
    const listaArma = await fetch (`https://eldenring.fanapis.com/api/weapons/${nombreArma}`)
    const arma = await listaArma.json()
    return arma
}
const listaArmas = async (limit) => {
    const armas = await cogerArmas(limit)
    const armasPromise = armas.map(async (p) => {
      const arma = await unArma(p.name)
      return arma
      
    })
  const armaLista = await Promise.all(armasPromise)
  console.log(armaLista)
  return armaLista
}
listaArmas()
