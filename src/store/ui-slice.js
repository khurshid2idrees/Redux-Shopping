import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        notification:null},


        // here we create some reducer function to handle states for the notification managment for the 
        // application

    reducers: {
        showNotification(state,action){
            state.notification = {
                message : action.payload.message, 
                type: action.payload.type,
                open: action.payload.open
            } 
        }
    }
    
}); 

export const uiActions = uiSlice.actions;

// Now we need to export default the ui slice for the application. 

export default uiSlice;

