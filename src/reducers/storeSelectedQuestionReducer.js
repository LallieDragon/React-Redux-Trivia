export default (state = [], action) => {
  switch (action.type) {
    case 'STORE_QUESTION':
      return {
        question: action.question,
        allAnswers: action.allAnswers
      }
    default:
      return state;
  }
};
