import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../features/history/history-slice";
import notificationReducer from "../features/history/history-slice";
import requestsReducer from "../features/requests/request-slice";

export const store = configureStore({
  reducer: {
    history: historyReducer,
    notification: notificationReducer,
    requests: requestsReducer,
  },
});
