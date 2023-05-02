import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";

const Counter = (props) => {
  console.log(props);
  const { count, step, dispatch, increment, decrement, setStep } = props;
  return (
    <div>
      <p>Count : {count}</p>
      <label>
        Step :{" "}
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => setStep(value)}
        />
      </label>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementCb: () => dispatch(increment()),
//     decrementCb: () => dispatch(decrement()),
//     setStepCb: ({target:{value}})=> dispatch(setStep(value))
//   };
// }

const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
};
const withState = connect(mapStateToProps, mapDispatchToProps);
const CounterWithState = withState(Counter);
export default CounterWithState;
