// Importa o componente dos botões
import ButtonLink from "./ButtonLink";

// Importa o componente das habilidades
import SkillBadge from "./SkillBadge";

// Componente ProfileCard
// Ele recebe um objeto chamado profile contendo os dados do profissional
function ProfileCard({ profile }) {
  return (
    // Card principal do perfil
    <article className="profile-card">

      {/* Parte superior do card */}
      <div className="profile-header">

        {/* Avatar com as iniciais do nome */}
        <div className="avatar">
          {profile.initials}
        </div>

        {/* Nome do profissional */}
        <h1>{profile.name}</h1>

        {/* Cargo ou área de atuação */}
        <h2>{profile.role}</h2>

        {/* Localização */}
        <p className="location">{profile.location}</p>
      </div>

      {/* Texto de apresentação */}
      <p className="bio">
        {profile.bio}
      </p>

      {/* Área de informações rápidas */}
      <div className="info-grid">
        <div className="info-item">
          <strong>{profile.experience}</strong>
          <span>Experiência</span>
        </div>

        <div className="info-item">
          <strong>{profile.projects}</strong>
          <span>Projetos</span>
        </div>

        <div className="info-item">
          <strong>{profile.students}</strong>
          <span>Alunos</span>
        </div>
      </div>

      {/* Área das habilidades */}
      <section className="skills-section">
        <h3>Principais habilidades</h3>

        <div className="skills-list">
          {/* Percorre o array de habilidades e cria um componente para cada uma */}
          {profile.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* Área dos botões */}
      <div className="button-group">
        <ButtonLink
          text="LinkedIn"
          href={profile.links.linkedin}
          variant="primary"
        />

        <ButtonLink
          text="GitHub"
          href={profile.links.github}
          variant="secondary"
        />

        <ButtonLink
          text="Portfólio"
          href={profile.links.portfolio}
          variant="outline"
        />
      </div>

    </article>
  );
}

// Exporta o componente ProfileCard
export default ProfileCard;
