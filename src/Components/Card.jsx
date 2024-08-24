import '../style/Card.css';
import PropTypes from 'prop-types';

const Card = ({ caminhoImagem, titulo, descricao }) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={caminhoImagem} alt={titulo} className="card-image" />
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    caminhoImagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
};

export default Card;  