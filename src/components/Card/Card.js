import { useTranslation } from 'react-i18next';
import "./Card.css";

const Card = ({ character }) => {
const { t } = useTranslation()

  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div>
        <h5>{character.name}</h5>
        <h6>{t("Status")}: {character.status}</h6>
        <h6>{t("Species")}: {character.species}</h6>
        <h6>{t("Gender")}: {character.gender}</h6>
        <h6>{t("Origin")}: {character.origin.name}</h6>
      </div>
    </div>
  );
};

export default Card;
