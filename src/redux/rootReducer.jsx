import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import globalReducer from './global/globalReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  global: globalReducer,
  customization: customizationReducer
});

export default reducer;
