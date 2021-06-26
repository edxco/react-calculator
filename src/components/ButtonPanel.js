import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ onClick }) {
  const namesButtons = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '=', ' '],
  };

  const arrKeys = Object.keys(namesButtons);
  const buttons = arrKeys.map((key) => namesButtons[key].map((element) => (
    <Button key={element} name={element} onClick={onClick} />
  )));

  return (
    <div className="center-calculator">
      {buttons.map((element, i) => (
        <div key={arrKeys[i]}>{element}</div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
