export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_MESSAGE':
      return [...state, action.payload];
      break;

    case 'LOAD_PAST_MESSAGES': {
      const pastMessages = action.payload.map(message => message);
      return pastMessages;
      break;
    }

    default:
      return state;
  }
};
