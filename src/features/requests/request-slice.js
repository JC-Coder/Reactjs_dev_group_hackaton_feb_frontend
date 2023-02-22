import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { helperFunction } from "../../helper/helper";
import axios from "axios";

const initialState = {
  musicRequests: [],
  played: [],
  unavailable: [],
  loading: false,
  error: "",
};

export const fetchAllRequests = createAsyncThunk(
  "requests/fetchAllRequests",
  async () => {
    try {
      const response = await axios.get(
        "https://groovedeck.adaptable.app/dj/requests"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const requestSlice = createSlice({
  name: "musicRequests",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchAllRequests.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchAllRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.musicRequests = action.payload;
      state.error = "false";
    });
    builders.addCase(fetchAllRequests.rejected, (state) => {
      state.loading = false;
      state.musicRequests = [];
      state.error = "";
    });
  },
  reducers: {
    addToPlayed(state, action) {
      const existingItem = state[action.payload.receiver].findIndex(
        (request) => request._id === action.payload.item._id
      );
      if (existingItem < 0) {
        helperFunction.notify(`Added to ${action.payload.receiver} songs`);
        state[action.payload.receiver].push(action.payload);
      } else {
        helperFunction.notify(
          `Song already in ${action.payload.receiver}`,
          "error"
        );
      }
      // const existingItem = state.played.findIndex(
      //   (request) => request._id === action.payload._id
      // );
      // if (existingItem < 0) {
      //   helperFunction.notify("Added to played songs");
      //   state.played.push(action.payload);
      // } else {
      //   helperFunction.notify("Song already in played List", "error");
      // }
      const filterRequests = state[action.payload.sender].findIndex(
        (request) => request._id === action.payload.item._id
      );
      state[action.payload.sender].splice(filterRequests, 1);
    },
  },
});

export const { addToPlayed, removeFromPlayed } = requestSlice.actions;
export default requestSlice.reducer;
