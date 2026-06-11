// Componente SkillBadge
// Recebe uma habilidade por props
function SkillBadge({ skill }) {
  return (
    // Cada habilidade será exibida como uma pequena etiqueta visual
    <span className="skill-badge">
      {skill}
    </span>
  );
}

// Exporta o componente para ser utilizado em outros arquivos
export default SkillBadge;
