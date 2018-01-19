export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_DISCUSSION':
      return [action.payload, ...state];
      break;

    case 'LOAD_PAST_DISCUSSIONS': {
      const pastDiscussions = action.payload.map(discussion => discussion);
      return pastDiscussions;
      break;
    }

    default:
      return state;
  }
};
