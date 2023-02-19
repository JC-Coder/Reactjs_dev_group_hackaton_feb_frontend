import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    notifications: []
}


const notificationSlice = createSlice({
    name: 'Notifications',
    initialState,
    reducers: {
        addNotifications(state, action) {
            state.notifications.push(action.payload)
        }
    }
})


export const {addNotifications} = notificationSlice.actions
export default notificationSlice.reducer