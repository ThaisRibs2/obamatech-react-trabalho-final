// Componente ProductCard
// Exercício 7: Props Complexas - todos os dados são dinâmicos, vindos de props
// Exercício 9: Passagem de Parâmetros e Eventos - botão "Comprar" com alert dinâmico

// Função para formatar preço em Reais (mantida do projeto original)
function formatPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// O componente recebe: imageUrl, title, tag, description e price
function ProductCard(props) {
  // Exercício 9: função de evento que usa props.title como parâmetro dinâmico
  function handleBuyClick() {
    alert(`Você adicionou o produto: ${props.title} ao carrinho!`);
  }

  return (
    <div className="product-card">
      {/* Exercício 7: imageUrl e title vindos de props */}
      <img src={props.imageUrl} alt={props.title} />

      <div className="product-info">
        {/* Exercício 7: tag vinda de props */}
        <span className="product-tag">{props.tag}</span>

        {/* Exercício 7: title vindo de props */}
        <h3>{props.title}</h3>

        {/* Exercício 7: description vinda de props */}
        <p className="product-description">{props.description}</p>

        <div className="product-price-btn">
          {/* Exercício 7: price formatado, vindo de props */}
          <span className="product-price">{formatPrice(props.price)}</span>

          {/* Exercício 9: evento onClick com parâmetro dinâmico (props.title) */}
          <button className="btn-buy" onClick={handleBuyClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
