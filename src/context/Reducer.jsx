import { useReducer } from "react";

const initialState = {
  authToken: null,
  user: null,
  isAuthenticated: false,
  loading: false, // Set to true while loading or checking authentication
};

// Reducer function to handle actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authToken: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false, // Finished loading after successful login
      };
    case "LOGOUT":
      return {
        ...state,
        authToken: null,
        user: null,
        isAuthenticated: false,
        loading: false, // Finished loading after logout
      };
    case "LOAD_USER":
      return {
        ...state,
        authToken: action.payload.token,
        user: action.payload.user,
        isAuthenticated: !!action.payload.token,
        loading: false, // Finished loading after loading user from storage
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload, // Use to start/stop loading
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return [state, dispatch];
};

export default Reducer;
