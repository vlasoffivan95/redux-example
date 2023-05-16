import "./App.css";
import Counter from "./components/Counter";
import NotFoundPage from "pages/NotFound";
import HomePage from "pages/HomePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import UsersPage from "pages/UsersPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/users" component={UsersPage} />
        <Route path="*" component={NotFoundPage} exact />
      </Switch>
    </>
  );
}

export default App;
