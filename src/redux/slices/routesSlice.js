import { createSlice } from "@reduxjs/toolkit";
import { createRoutine } from 'redux-saga-routines';


const initialState = {
    routes: [
        {
            name: "Маршрут 1",
            id: 0,
            active: false,
            coordinates: [{ lat: 59.84660399, lng: 30.29496392 }, { lat: 59.82934196, lng: 30.42423701 }, { lat: 59.83567701, lng: 30.38064206 }]
        },
        {
            name: "Маршрут 2",
            id: 1,
            active: false,
            coordinates: [{ lat: 59.82934196, lng: 30.42423701 }, { lat: 59.82761295, lng: 30.41705607 }, { lat: 59.84660399, lng: 30.29496392 }]
        },
        {
            name: "Маршрут 3",
            id: 2,
            active: false,
            coordinates: [{ lat: 59.83567701, lng: 30.38064206 }, { lat: 59.84660399, lng: 30.29496392 }, { lat: 59.82761295, lng: 30.41705607 }]
        },
    ],
    coordinates: [],
    loading: false,
};

export const route = createRoutine('routes/getRoute');

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        getRoute(state) {
            state.loading = true;
        },
        getRouteSuccess(state, action) {
            const { coordinates } = action.payload;
            state.coordinates = coordinates;
            state.loading = false;
        },
        getRouteFailed(state) {
            state.loading = false;
        },
        setActiveStatus(state, action) {
            const id = action.payload;
            state.routes = state.routes.map((route) => {
                route.active = false;
                if (route.id === id) {
                    route.active = true;
                };
                return route;
            })
        },
    },
})

export const getRoutes = (state) => state.routes;
export const getActiveRoute = (state) => state.routes.routes.find((route) => route.active);

export const { setActiveStatus, getRouteSuccess } = routesSlice.actions;

export default routesSlice.reducer;