// Componente Footer
// Exercício 6: Props Básicas - recebe companyName e year via props
// O componente pai (App.js) envia:
//   <Footer companyName="AlphaTech" year={2024} />
function Footer(props) {
  return (
    <footer>
      <div className="container">
        {/* Exercício 6: ano e nome da empresa vindos de props */}
        <p>
          &copy; {props.year} {props.companyName} Digital Ltda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
