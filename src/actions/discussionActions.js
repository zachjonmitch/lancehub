import axios from 'axios';

export const addNewDiscussion = (discussion) => {
  return {
    type: 'ADD_NEW_DISCUSSION',
    payload: discussion,
  };
};

export const loadPastDiscussions = (pastDiscussions) => {
  return {
    type: 'LOAD_PAST_DISCUSSIONS',
    payload: pastDiscussions,
  };
};
