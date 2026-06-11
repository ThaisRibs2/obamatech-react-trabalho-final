// Importa o componente ProfileCard
import ProfileCard from "./components/ProfileCard";

// Componente principal da aplicação
function App() {
  // Objeto com os dados do profissional
  // Esses dados serão enviados para o componente ProfileCard por props
  const profile = {
    initials: "TRS",
    name: "Thais Ribeiro da Silva",
    role: " Desenvolvedor Web",
    location: "São Paulo, Brasil",
    bio: "apaixonada por tecnologia, educação e desenvolvimento de sistemas. Atua com criação de projetos práticos e desenvolvimento de soluções web modernas.",
    experience: "10+ anos",
    projects: "35+",
    students: "1000+",

    // Array com as principais habilidades
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Node.js",
      "Banco de Dados",
    ],

    // Objeto com links profissionais
    links: {
      linkedin: "https://www.linkedin.com/in/thais-ribeiro-9448b71b9/",
      github: "https://github.com/ThaisRibs2",
      portfolio: "https://www.linkedin.com/in/thais-ribeiro-9448b71b9/",
    },
  };

  return (
    // Container principal da página
    <main className="app">

      {/* Área de apresentação da página */}
      <section className="page-intro">
        <span className="tag">Projeto ReactJS</span>

        <h1>obamatech</h1>

        <p>
          Um projeto simples, bonito e ideal para aprender componentes, props,
          listas e estilização com ReactJS.
        </p>
      </section>

      {/* Renderiza o cartão de perfil e envia os dados por props */}
      <ProfileCard profile={profile} />

    </main>
  );
}

// Exporta o componente App
export default App;
