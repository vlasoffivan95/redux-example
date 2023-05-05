import React from "react";
import styles from "../Counter/style.module.scss";
import { connect } from "react-redux";
import { setTheme } from "../../store/slices/themeSlice";

const Hucpa = ({theme, setTheme}) => {

    console.log(theme)
  return (
    <div className={styles.dark}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi
        totam fuga quam inventore soluta iusto iste quas. Voluptatum, libero
        architecto error placeat voluptatibus eius iusto ducimus exercitationem
        velit magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Optio eligendi totam fuga quam inventore soluta iusto iste quas.
        Voluptatum, libero architecto error placeat voluptatibus eius iusto
        ducimus exercitationem velit magni. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Optio eligendi totam fuga quam inventore
        soluta iusto iste quas. Voluptatum, libero architecto error placeat
        voluptatibus eius iusto ducimus exercitationem velit magni. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Optio eligendi totam fuga
        quam inventore soluta iusto iste quas. Voluptatum, libero architecto
        error placeat voluptatibus eius iusto ducimus exercitationem velit
        magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        eligendi totam fuga quam inventore soluta iusto iste quas. Voluptatum,
        libero architecto error placeat voluptatibus eius iusto ducimus
        exercitationem velit magni. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio eligendi totam fuga quam inventore soluta iusto
        iste quas. Voluptatum, libero architecto error placeat voluptatibus eius
        iusto ducimus exercitationem velit magni. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Optio eligendi totam fuga quam inventore
        soluta iusto iste quas. Voluptatum, libero architecto error placeat
        voluptatibus eius iusto ducimus exercitationem velit magni.
      </p>
    </div>
  );
};


function mapStateToProps(state) {
    console.log(state);
    return {
      count: state.counter.count,
      step: state.counter.step,
      language: state.lang,
      theme: state.theme,
    };
  }


  const mapDispatchToProps = {

    setTheme,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Hucpa);
