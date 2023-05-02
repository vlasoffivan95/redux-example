import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";
import { setLanguage } from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";

const {
  LANGUAGE: { EN_US, UA_UA },
} = CONSTANTS;

const translations = new Map([
  [
    EN_US.VALUE,
    {
      countText: "Count",
      stepText: "Step",
      incrementBtn: "Increment",
      decrementBtn: "Decrement",
      selectOptionTextMap: {},
    },
  ],
  [
    UA_UA.VALUE,
    {
      countText: "Рахунок",
      stepText: "Крок",
      incrementBtn: "Додати",
      decrementBtn: "Відняти",
    },
  ],
]);

const Counter = (props) => {
  console.log(props);
  const { count, step, language, increment, decrement, setStep, setLanguage } =
    props;

  const translation = translations.get(language);
  const { countText, stepText, incrementBtn, decrementBtn } = translation;

  return (
    <div>
      <select
        value={language}
        onChange={({ target: { value } }) => setLanguage(value)}
      >
        <option value = {EN_US.VALUE}>English</option>
        <option value = {UA_UA.VALUE}>Ukrainian</option>
      </select>
      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}:{" "}
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => setStep(value)}
        />
      </label>
      <button onClick={() => increment()}>{incrementBtn}</button>
      <button onClick={() => decrement()}>{decrementBtn}</button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.counter.count,
    step: state.counter.step,
    language: state.lang,
  };
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
  setLanguage,
};
// const withState = connect(mapStateToProps, mapDispatchToProps);
// const CounterWithState = withState(Counter);
// export default CounterWithState;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
