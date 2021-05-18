function ButtonPanel() {
  return (
    <div className="center-calculator">
      <div className="board-row">
        <button type="button" className="square">AC</button>
        <button type="button" className="square">+/-</button>
        <button type="button" className="square">%</button>
        <button type="button" className="square">÷</button>
      </div>
      <div className="board-row">
        <button type="button" className="square">7</button>
        <button type="button" className="square">8</button>
        <button type="button" className="square">9</button>
        <button type="button" className="square">X</button>
      </div>
      <div className="board-row">
        <button type="button" className="square">4</button>
        <button type="button" className="square">5</button>
        <button type="button" className="square">6</button>
        <button type="button" className="square">-</button>
      </div>
      <div className="board-row">
        <button type="button" className="square">1</button>
        <button type="button" className="square">2</button>
        <button type="button" className="square">3</button>
        <button type="button" className="square">+</button>
      </div>
      <div className="board-row">
        <button type="button" className="square">0</button>
        <button type="button" className="square">.</button>
        <button type="button" className="square">=</button>
        <button type="button" className="square"> </button>
      </div>
    </div>
  );
}

export default ButtonPanel;
