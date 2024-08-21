import { createSlice } from '@reduxjs/toolkit';
 
const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    serviceNames: [],
    orderedServices: [],
  },
  reducers: {
    addServiceName: (state, action) => {
      state.serviceNames.push(action.payload);
    },
    setServiceNames: (state, action) => {
      state.serviceNames = action.payload;
    },
    setOrderedServices: (state, action) => {
      state.orderedServices = action.payload;
    },
  },
});
 
export const { addServiceName, setServiceNames, setOrderedServices } = servicesSlice.actions;
export default servicesSlice.reducer;