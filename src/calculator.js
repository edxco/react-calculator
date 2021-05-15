import PropTypes from 'prop-types';

function Calculator({ name }) {
  return (
    <div>
      <h1>
        Welcome to
        {' '}
        {name}
        {' '}
        Calculator
      </h1>
    </div>
  );
}

Calculator.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calculator;
