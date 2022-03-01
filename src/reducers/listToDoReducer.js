const initialState = {
  texte: ["primera"],
};

const listToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NOU_TEXTE":
      console.log(initialState);
      return {
        texte: state.texte.push(action.payload),
      };
    default:
      return state;
  }
};

export default listToDoReducer;
