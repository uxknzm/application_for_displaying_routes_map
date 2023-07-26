import React, { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";

import { getActiveRoute } from "../../redux/slices/routesSlice";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export const RoutingMachine = () => {
  const route = useSelector(getActiveRoute);
  const coordinates = route?.coordinates;

  const map = useMap();

  useEffect(() => {
    if (!coordinates) return;
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: coordinates.map((coordinate) => {
        return L.latLng(coordinate.lat, coordinate.lng);
      }),
      router: new L.Routing.OSRMv1({
        profile: "driving",
      }),
      lineOptions: {
        styles: [
          {
            color: "#DC143C",
            opacity: 1,
            weight: 5,
          },
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      draggableWaypoints: false,
      routeWhileDragging: false,
      useZoomParameter: true,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [coordinates]);

  return null;
};

export default RoutingMachine;
