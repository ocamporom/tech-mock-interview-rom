
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };

    case 'SET_BIRTHDAY':
      return {
        ...state,
        birthday: action.payload,
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };

    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };

    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };

    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.payload,
      };
      case 'SET_WEIGHT':
        return {
          ...state,
          weight: action.payload,
        };

    

    case 'RESET_ERRORS':
      return {
        ...state,
        errors: {},
      };

    default:
      return state;
  }
}

const useFormPageReducer = () =>
  useReducer(reducer, {
    name: '',
    birthday: '',
    address: '',
    email: '',
    phoneNumber: '',
    height: '',
    weight: '',
    errors: {},
  });

export default useFormPageReducer;
