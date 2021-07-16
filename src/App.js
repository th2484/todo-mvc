import "./index.css";
import { Header } from "./components/header/Header.js";
import { ListForm } from "./components/list/ListForm.js";
import { Footer } from "./components/footer/Footer.js";

function App() {
  return (
    <section className="todoapp-header">
      <Header />
      <div className="todoapp">
        <ListForm />
      </div>
      <Footer />
    </section>
  );
}

export default App;
