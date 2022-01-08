function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>카운터</h1>
      <h3>{number}</h3>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
