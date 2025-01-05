import React, { useState, useEffect } from "react";
import {
  Box,
  Breadcrumbs,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography,
  Skeleton,
} from "@mui/material";
import CustomTable from "../../components/dashboard/CustomTable";

const UserList = () => {
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
    <div>
      {loading ? (
        <Box
          sx={{
            height: "62px",
            padding: "10px",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 2px 3px 0px #0000001A",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            variant="text"
            width={100}
            height={24}
            sx={{ fontSize: "16px" }}
          />
          <Skeleton
            variant="rectangular"
            width={115}
            height={32}
            sx={{ borderRadius: "5px" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            height: "62px",
            padding: "10px",
            gap: "10px",
            borderRadius: "6px",
            opacity: 1,
            backgroundColor: "#ffffff",
            boxShadow: "0px 2px 3px 0px #0000001A",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Manrope", serif',
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "20px",
              textAlign: "left",
              color: "#fc2861",
            }}
          >
            UserList
          </Typography>
          <Select
            defaultValue="ASC"
            sx={{
              width: "115px",
              height: "32px",
              opacity: 1,
              borderRadius: "5px",
              border: "1px solid #e5e5e5",
              padding: "7px 16px",
              backgroundColor: "#f8f8f8",
              color: "#333",
            }}
          >
            <MenuItem value="ASC">Ascending</MenuItem>
            <MenuItem value="DSC">Descending</MenuItem>
          </Select>
        </Box>
      )}

      <Paper sx={{ mt: 2.75, boxShadow: "0px 2px 3px 0px #0000001A" }}>
        <CustomTable />
      </Paper>
    </div>
  );
};

export default UserList;
