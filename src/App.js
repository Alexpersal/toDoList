import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { nouTexte } from "./actions/listToDoActions";

function App() {
  /*const texte = useSelector((store) => store.listToDoReducer.texte);
  const dispatchListToDo = useDispatch();*/

  return (
    <div className="App">
      <header className="App-header">
        <input></input>
        <br></br>
        <button>Nueva tarea</button>
        <ul>
          <li>hola {nouTexte}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
