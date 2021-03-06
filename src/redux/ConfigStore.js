import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './message/messageReducer';

const reducer = combineReducers({
  messageReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

// store.dispatch(fetchmessage());
export default store;
