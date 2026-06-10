// Componente Hero
// Exercício 5: Props Básicas - recebe title e subtitle via props
// O componente pai (App.js) envia:
//   <Hero title="Nova Coleção Alpha" subtitle="Os melhores ebooks e cursos te esperam." />
function Hero(props) {
  return (
    <section className="hero">
      {/* Exercício 5: textos dinâmicos vindos de props */}
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </section>
  );
}

export default Hero;
