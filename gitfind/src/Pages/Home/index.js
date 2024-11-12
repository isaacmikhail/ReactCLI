
import { Header } from "../../Compenents/Header";
import {background} from "./src/Assets/background.png";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <img src={background} className= "background" alt="background app"></img>
        <div className="info">
          <div>
            <input name="user" placeholder="@username"></input></div>
            <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
