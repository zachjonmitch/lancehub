export const addNewMessage = (message) => {
  return {
    type: 'ADD_NEW_MESSAGE',
    payload: message,
  };
};

export const loadPastMessages = (pastMessages) => {
  return {
    type: 'LOAD_PAST_MESSAGES',
    payload: pastMessages,
  };
};
