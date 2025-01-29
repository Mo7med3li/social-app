"use client";
import { useAppDispatch } from "@/hooks/store.hooks";
import { login } from "@/store/features/user.slice";
import { AppDispatch } from "@/store/store";
import { Password } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";

export default function page() {
  const dispath = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispath(login(values));
    },
  });
  return (
    <>
      <Box sx={{ width: "700px", mx: "auto", p: 2 }}>
        <Paper elevation={6} sx={{ p: 5, mt: 5 }}>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
            />
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
}
