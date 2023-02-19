import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyData: [],
};

const historySlice = createSlice({
  name: "History",
  initialState,
  reducers: {
    addHistory(state, action) {
        state.historyData.push(action.payload);
        },
        clearHistory(state) {
          state.historyData = [];
        },
        changeRequested(state, action) {
            state.historyData.map(currItems => {
                console.log('hello')
            })
        }
    },
  },
);

export const { addHistory, clearHistory, changeRequested } = historySlice.actions;
export default historySlice.reducer;
