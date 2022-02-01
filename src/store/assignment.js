import { createSlice } from "@reduxjs/toolkit";

const assignmentlice = createSlice({
  name: "assesment",
  initialState: localStorage.getItem("assignment") || [],
  reducers: {
    ADD_ASSIGNMENT(state, action) {
      const payload = { id: state.length + 1 || 0, ...action.payload };
      state.push(payload);
      localStorage.setItem("assignment", JSON.stringify(state));
    },
  },
});

export const { reducer, actions } = assignmentlice;
