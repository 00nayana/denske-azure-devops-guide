import { INCREMENT } from './actionTypes';
import initialStates from './initialStates';

const reducers =(state=initialStates, action) =>{
  {console.log(state)}
  switch (action.type) {
    
    case INCREMENT: {
      return {        
        ...state,
        increment: state.increment + action.payload
      };
     }
    default:
      return state
  }
};

// For debugging, set debug to true in your localStorage
export default (state = initialStates, action) => {
  const newState = reducers(state, action);
  if (localStorage.getItem('debug') === 'true') {
    // eslint-disable-next-line no-console
    console.log(`action ${action.type} => `, newState);
  }
  return newState;
};