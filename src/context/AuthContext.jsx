import { createContext, useEffect } from "react";
import Reducer from "./Reducer";
import PropTypes from "prop-types";

// Create the AuthContext
export const AuthContext = createContext();

// AuthContext Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = Reducer();

  // Check for existing token and user data on app load
  useEffect(() => {
    // Start loading
    dispatch({ type: "SET_LOADING", payload: true });

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      dispatch({
        type: "LOAD_USER",
        payload: { token, user: JSON.parse(storedUser) },
      });
    } else {
      dispatch({ type: "SET_LOADING", payload: false }); // Done loading
    }
  }, [dispatch]);

  // Login function
  const login = async (username, password) => {
    // Start loading
    dispatch({ type: "SET_LOADING", payload: true });

    const token = `fakeTokenFor_${username}`;

    // Simulate login
    dispatch({
      type: "LOGIN",
      payload: { token, user: { username, password } },
    });

    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({ username, password }));

    // Stop loading after login is done
    dispatch({ type: "SET_LOADING", payload: false });
  };

  // Logout function
  const logout = () => {
    // Start loading
    dispatch({ type: "SET_LOADING", payload: true });

    // Dispatch the logout action
    dispatch({ type: "LOGOUT" });

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Stop loading after logout is done
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <AuthContext.Provider
      value={{
        authToken: state.authToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading, // Provide loading state to components
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
