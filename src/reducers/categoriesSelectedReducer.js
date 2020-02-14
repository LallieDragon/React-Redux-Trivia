export default (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    default:
      return state;
  }
};
