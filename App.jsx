// App.jsx — Componente principal da aplicação
// Exercício 10: Reconstrução completa e organização
// O App.js orquestra apenas os componentes grandes,
// sem lógica de apresentação embutida.

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import "./index.css";

// Exercício 8: Array productsData copiado do script.js original
// Cada objeto representa um produto da vitrine
const productsData = [
  {
    id: 1,
    title: "React de A a Z",
    tag: "Curso Online",
    description:
      "Domine a biblioteca mais popular do mercado, do zero ao profissional.",
    price: 199.9,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Guia de CSS Moderno",
    tag: "Ebook",
    description:
      "Flexbox, Grid, Animações e as melhores práticas para layouts incríveis.",
    price: 49.9,
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Node.js Escalável",
    tag: "Curso Online",
    description:
      "Construa APIs robustas e de alta performance com Node.js e TypeScript.",
    price: 249.9,
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "UI/UX para Desenvolvedores",
    tag: "Ebook",
    description:
      "Princípios de design essenciais para criar interfaces bonitas e intuitivas.",
    price: 79.9,
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400&auto=format&fit=crop",
  },
];

function App() {
  return (
    <div className="site">
      {/* Exercício 10: Header sem props (dados fixos internos) */}
      <Header />

      <main className="container">
        {/*
          Exercício 5: Props Básicas no Hero
          title e subtitle são passados como props,
          substituindo os textos fixos que existiam antes
        */}
        <Hero
          title="Nova Coleção Alpha"
          subtitle="Os melhores ebooks e cursos te esperam."
        />

        {/*
          Exercício 8: map() — renderiza dinamicamente a grade de produtos
          Para cada item do array productsData, cria um <ProductCard />
          A prop key={product.id} é obrigatória pelo React para listas
        */}
        <section className="products">
          <div className="product-grid">
            {productsData.map((product) => (
              // Exercício 7: dados do produto passados via props para o ProductCard
              // Exercício 8: key obrigatório em listas no React
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                tag={product.tag}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>

      {/*
        Exercício 6: Props Básicas no Footer
        companyName e year são passados como props
      */}
      <Footer companyName="AlphaTech" year={2024} />
    </div>
  );
}

export default App;
