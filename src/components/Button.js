import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <div>
      <button type="button" className="square">
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
