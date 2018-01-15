export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_MESSAGE':
      return action.payload
      break;
  }
  return state;
}