import { apiInstance } from "../core/instance"

export const Route = {
  getRoute: function (params) {
    const { coordinatesToString } = params;
    const api = apiInstance();

    return api.get(`/${coordinatesToString}?geometries=geojson`);
  },
}