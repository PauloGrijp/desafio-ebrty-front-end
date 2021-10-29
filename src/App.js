import { Container } from "./styles/global";
import { NavBar } from "./components/NavBar";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <Container>
      <NavBar />
      <Tasks />
    </Container>
  );
}

export default App;
