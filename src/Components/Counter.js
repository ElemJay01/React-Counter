const Counter = ({ count, handleAdd, handleReset, handleMinus }) => {
  return (
    <section className="counter">
      <div className="header">
        <h2>Simple Counter With useState Hook</h2>
      </div>

      <div className="buttons">
        <button type="button" className="btn" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={handleMinus}>
          Minus
        </button>
      </div>
      <div className="count">
        <h3>Count:</h3>
        <h1>{count}</h1>
      </div>
    </section>
  );
};
export default Counter;
