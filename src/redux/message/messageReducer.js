const initState = {
  message: '',
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_MESSAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_MESSAGE':
      return {
        ...state,
        loaded: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export const fetchmessage = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_MESSAGE' });
  await fetch('http://127.0.0.1:3000/messages')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

export default messageReducer;
