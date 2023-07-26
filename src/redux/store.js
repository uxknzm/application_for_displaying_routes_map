import { configureStore } from '@reduxjs/toolkit';

import routes from './slices/routesSlice';





export const store = configureStore({
    reducer: {
        routes,
    },
});