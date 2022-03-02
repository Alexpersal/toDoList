const initialState = { tareas: [] };
const listToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NOU_TEXTE":
      /* {
        const texte = [...state.texte];
        /*if (!texte[action.texte]) texte[action.texte] = 0;
        texte[action.texte] += action.amount;
      }*/
      return state;
    /*texte: state.texte.push(action.payload),*/

    default:
      return state;
  }
};

export default listToDoReducer;
