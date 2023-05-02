import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";

const Counter = (props) => {
  console.log(props);
  const { count, step, dispatch, incrementCb, decrementCb } = props;
  return (
    <div>
      <p>Count : {count}</p>
      <label>
        Step :{" "}
        {/* <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => dispatch(setStep(+value))}
        /> */}
      </label>
      <button onClick={incrementCb}>Increment</button>
      <button onClick={decrementCb}>Decrement</button>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}
const withState = connect(mapStateToProps, mapDispatchToProps);
const CounterWithState = withState(Counter);

function mapDispatchToProps(dispatch) {
  return {
    incrementCb: () => dispatch(increment()),
    decrementCb: () => dispatch(decrement()),
  };
}

export default CounterWithState;
