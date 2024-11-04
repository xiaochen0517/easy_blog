import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ConfigState {
  title: string
  description: string
}

const initialState: ConfigState = {
  title: "Easy Blog App",
  description: "A simple blog application",
}

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateConfig: (state, action: PayloadAction<ConfigState>) => {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
})

export const {updateConfig} = configSlice.actions

export default configSlice.reducer
