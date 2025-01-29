import { userState } from "@/types/user.type";
import { Token } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: userState = {
  token: null,
};
export const login = createAsyncThunk(
  "user/login",
  async (values: { email: string; password: string }) => {
    const options = {
      url: "https://linked-posts.routemisr.com/users/signin",
      method: "POST",
      data: values,
    };

    let { data } = await axios.request(options);
    return data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("sa7");
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("8lt");
      console.log({ state, action });
    });
  },
});
export const userReducer = userSlice.reducer;
