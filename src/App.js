import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Components from "./components/pages/Components";
import "./App.css";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/components" component={Components}></Route>
            </Switch>
        </div>
    );
}

export default App;
