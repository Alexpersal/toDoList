import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { nouTexte } from "./actions/listToDoActions";
import store from "./store";

function App() {
  const prueba = useSelector((store) => store.listToDoReducer);
  const dispatchListToDo = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" /*onChange={}*/></input>
        <br></br>
        <button onClick={() => dispatchListToDo(nouTexte)}>Nueva tarea</button>
        <ul>
          <li>hola </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
