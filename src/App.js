import Footer from "./components/Footer";
import Header from "./components/Header";
import Rocket from "./components/Rockets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <div className="rocket-header"></div>
          <div className="gradient"></div>
        </div>

        <Header />
        <div className="main-info">
          <h1> Rocket </h1>
          <p> Improving all the time </p>
          <button className="start-button"> Start </button>
        </div>
        <div>
          <Rocket />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
