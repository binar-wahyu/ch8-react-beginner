import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TextCustom from "./components/TextCustom";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/tentang-kami">
            <h1>Tentang Kami</h1>
          </Route>
          <Route path="/kontak-kami">
            <ContactUs />
          </Route>
          <Route path="/">
            <TextCustom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
