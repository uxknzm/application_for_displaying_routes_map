import { call, put, takeLatest } from "redux-saga/effects";
import { getRouteSuccess, route } from "../redux/slices/routesSlice";
import { Route } from "../api/route";


function* workGetRoute(action) {
    const coordinatesToString = action.payload;
    const { success, fulfill } = route;
    try {
        const { data } = yield call(Route.getRoute, { coordinatesToString });
        
        // в случае успеха отдать данные редьюсеру
        yield put(getRouteSuccess({ coordinates: data.routes[0].geometry.coordinates }))
      } catch (error) {
        // ошибку можно тоже отдать редьюсеру через вызов failure
        // или получить в компоненте
        // или вообще написать функцию-обработчик, правящую миром ошибок
        console.error(error)
      } finally {
        yield put(fulfill())
      }
};

export function* routeSaga() {
    yield takeLatest(route.TRIGGER, workGetRoute)
};