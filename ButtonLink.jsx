// Componente ButtonLink
// Ele recebe informações por props: text, href e variant
function ButtonLink({ text, href, variant }) {
  return (
    // Tag <a> cria um link clicável
    // target="_blank" abre o link em uma nova aba
    // rel="noreferrer" melhora a segurança ao abrir links externos
    <a
      className={`button-link ${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

// Exporta o componente para ser usado em outros arquivos
export default ButtonLink;
