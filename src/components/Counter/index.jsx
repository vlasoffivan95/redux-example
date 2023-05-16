import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";
import { setLanguage } from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";
import { setTheme } from "../../store/slices/themeSlice";
import { THEMES } from "../../constants";
import styles from './style.module.scss'
import { bindActionCreators } from "@reduxjs/toolkit";

const {
  LANGUAGE: { EN_US, UA_UA },
  LANGUAGE,
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
  // const {
  //   count,
  //   step,
  //   language,
  //   increment,
  //   decrement,
  //   setStep,
  //   setLanguage,
  //   theme,
  //   setTheme,
  // } = props;

  const language = useSelector(state=>state.lang)
  const theme = useSelector(state=>state.theme)
 const{step, count} = useSelector(state=>state.counter)
 const dispatch = useDispatch()



  const translation = translations.get(language);
  const { countText, stepText, incrementBtn, decrementBtn } = translation;
  console.log(THEMES.THEME.WHITE);
  console.log(theme);
  console.log(setTheme);
  const setLang = (newLang) => dispatch(setLanguage(newLang))
  const setNewStep = (newStep) => dispatch(setStep(newStep))

  const actionCreators = bindActionCreators(
    {setLang, setStep, increment, decrement}, dispatch
   )

  return (
    <div className={theme===THEMES.THEME.DARK?styles.dark:styles.white}>
      <select
        value={language}
        onChange={({ target: { value } }) => setLang(value)}
      >

        {/* <option value = {EN_US.VALUE}>English</option>
        <option value = {UA_UA.VALUE}>Ukrainian</option> */}

        {Object.values(LANGUAGE).map((langObj) => (
          <option key={langObj.VALUE} value={langObj.VALUE}>
            {langObj.OPTION_TEXT}
          </option>
        ))}
      </select>


      <select value={theme} onChange={({target:{value}})=>  dispatch(setTheme(value))}>
          <option value={THEMES.THEME.DARK}>Dark</option>
          <option value={THEMES.THEME.WHITE}>White</option>
        </select>

      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}:{" "}
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => actionCreators.setStep(value)}
        />
      </label>
      <button onClick={() => dispatch(increment())}>{incrementBtn}</button>
      <button onClick={() => dispatch(decrement())}>{decrementBtn}</button>
    </div>
  );
};

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     count: state.counter.count,
//     step: state.counter.step,
//     language: state.lang,
//     theme: state.theme,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementCb: () => dispatch(increment()),
//     decrementCb: () => dispatch(decrement()),
//     setStepCb: ({target:{value}})=> dispatch(setStep(value))
//   };
// }

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   setStep,
//   setLanguage,
//   setTheme,
// };
// const withState = connect(mapStateToProps, mapDispatchToProps);
// const CounterWithState = withState(Counter);
// export default CounterWithState;

export default Counter;
