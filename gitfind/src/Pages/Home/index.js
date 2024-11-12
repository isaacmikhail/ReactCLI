
import { Header } from "../../Compenents/Header";
import background from "../../Assets/background.png";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <img src={background} className= "background" alt="background app"></img>
        <div className="info">
          <div>
            <input name="user" placeholder="@username"></input>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
