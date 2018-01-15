export const addNewMessage = (message) => {
  console.log(message);
  return {
    type: 'ADD_NEW_MESSAGE',
    payload: message,
  };
};
