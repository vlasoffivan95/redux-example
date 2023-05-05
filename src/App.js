import "./App.css";
import Counter from "./components/Counter";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Hucpa from "./components/Hucpa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/hucpa" component={Hucpa} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
