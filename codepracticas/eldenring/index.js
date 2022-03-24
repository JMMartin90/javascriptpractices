const cogerArmas = async (limit, page) => {
  const traerArmas = await fetch(
    `https://eldenring.fanapis.com/api/weapons?limit=${limit}&page=${page}`
  );
  const armas = await traerArmas.json();
  return armas.data;
};

const filtroPorAtributo = (armas, atributo) => {
  if (!armas.length) {
    return [];
  }
  if (!atributo.length) {
    return armas;
  }
  const scaling = ["S", "A", "B", "C"]
  return armas.filter((a) => {
    return a.scalesWith.find( s => s.name === atributo && scaling.includes(s.scaling))
  });
};

(async (limit, page) => {
  const armas = await cogerArmas(limit, page);
  const armasPorDestreza = filtroPorAtributo(armas,"Dex")
  console.log(armasPorDestreza);
})(100, 0);

(async (limit, page) => {
  const armas = await cogerArmas(limit, page);
  const armasPorDestreza = filtroPorAtributo(armas,"Dex")
  console.log(armasPorDestreza);
})(100, 1);

(async (limit, page) => {
  const armas = await cogerArmas(limit, page);
  const armasPorDestreza = filtroPorAtributo(armas,"Dex")
  console.log(armasPorDestreza);
})(100, 2);

(async (limit, page) => {
  const armas = await cogerArmas(limit, page);
  const armasPorDestreza = filtroPorAtributo(armas,"Dex")
  console.log(armasPorDestreza);
})(100, 3);
