import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loadingState, setLoadingState] = useState(false);
  const { loading, login } = useContext(AuthContext); // Fetch the loading state from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true);

    // Simulate an async login process
    await new Promise((resolve) => setTimeout(resolve, 1500));

    login(formData.username, formData.password);
    setLoadingState(false);
    navigate("/");
  };

  if (loading) {
    // Return a loading spinner until the auth state is resolved
    return (
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            Login
          </Typography>

          {/* Username input */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          {/* Password input */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Submit button with loading animation */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loadingState} // Disable the button when loading
            startIcon={loadingState ? <CircularProgress size={20} /> : null}
          >
            {loadingState ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
