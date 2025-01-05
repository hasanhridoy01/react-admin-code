import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data from API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* Welcome Section */}
      {loading ? (
        <Skeleton
          variant="rectangular"
          height={100}
          sx={{ borderRadius: "8px", marginBottom: "20px" }}
        />
      ) : (
        <Paper
          sx={{
            padding: "20px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Welcome, Zahid Hasan Hridoy!
          </Typography>
          <Typography variant="body1">
            This is a personalized dashboard for Zahid Hasan Hridoy. Use the
            widgets below to navigate and view data.
          </Typography>
        </Paper>
      )}

      {/* Grid Sections */}
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item lg={4} md={6} sm={12} xs={12} key={item}>
            {loading ? (
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: "8px" }}
              />
            ) : (
              <Paper
                sx={{
                  padding: "20px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h6">
                  {item === 1
                    ? "Recent Activity"
                    : item === 2
                    ? "Reports"
                    : item === 3
                    ? "Statistics"
                    : item === 4
                    ? "Notifications"
                    : item === 5
                    ? "Tasks"
                    : "Other Section"}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  {item === 1
                    ? "View recent activity here."
                    : item === 2
                    ? "Generate and view reports here."
                    : item === 3
                    ? "Placeholder for statistics."
                    : item === 4
                    ? "Check your notifications here."
                    : item === 5
                    ? "Manage your tasks here."
                    : "Other details go here."}
                </Typography>
              </Paper>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
