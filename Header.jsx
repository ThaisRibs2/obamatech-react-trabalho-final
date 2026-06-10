// Componente Header
// Exibe o logo e a navegação do site
function Header() {
  return (
    <header>
      <div className="container header-inner">
        <h1 id="logo">
          Obama<span>Tech</span>
        </h1>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Ebooks</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
