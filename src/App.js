import "./App.css";
import { Header } from "./components/header/Header.js";
import { List } from "./components/list/List.js";

function App() {
  return (
    <section className="todoapp-header">
      <Header />
      <div className="todoapp">
        <List />
      </div>
    </section>
  );
}

export default App;
