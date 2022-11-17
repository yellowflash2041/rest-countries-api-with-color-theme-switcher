import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/allCountries/Countries";
import Country from "./components/singleCountry/Country";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/:name" component={Country} />
        <Route path="/" exact component={Countries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
