import {combineReducers} from 'redux';
import productReducer from './productReducer';
import sellersReducer from './sellersReducer';

export default combineReducers({
  products: productReducer,
  sellers: sellersReducer
});