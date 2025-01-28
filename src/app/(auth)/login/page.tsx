import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Box sx={{ width: "700px", mx: "auto", p: 2 }}>
        <Paper elevation={6} sx={{ p: 5, mt: 5 }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
            />
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
}
