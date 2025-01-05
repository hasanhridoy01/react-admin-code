import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
  Avatar,
  Skeleton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const mockData = Array.from({ length: 20 }).map((_, index) => ({
  providerName: "Fastlink",
  package: "30 Mins",
  price: "5000 IQD",
  id: index + 1,
}));

export default function ProviderTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {loading ? (
        <TableContainer sx={{ maxHeight: "Calc(100vh - 168px)" }}>
          <Table>
            <TableHead>
              <TableRow>
                {Array.from({ length: 4 }).map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton variant="text" width="100%" height={24} />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={40}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer sx={{ maxHeight: "Calc(100vh - 168px)" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Provider Name</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Avatar
                          src="https://via.placeholder.com/40x40.png"
                          alt={row.providerName}
                        />
                        <strong>{row.providerName}</strong>
                      </div>
                    </TableCell>
                    <TableCell>{row.package}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={44}
          sx={{ mt: 1 }}
        />
      ) : (
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={mockData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
