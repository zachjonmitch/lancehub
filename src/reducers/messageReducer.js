export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_MESSAGE':
      console.log(state, action);
      return [action.payload, ...state];
      break;

    case 'LOAD_PAST_MESSAGES': {
      console.log(state, action);
      const pastMessages = action.payload.map((message) => {
        return message;
      });
      return pastMessages;
      break;
    }

    default:
      return state;
  }
};
