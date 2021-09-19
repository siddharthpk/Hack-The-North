import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Compoent } from "react"; 

const App = () => {
  return (
    <Container>
      <Router>
        <Container>
          <Navbar>
            <Switch>
              <Route path="./Pages/LoginPage" />
            </Switch>
          </Navbar>
        </Container>
      </Router>
      <Header />
      <LandingPage />
    </Container>
  );
};

export default App;
