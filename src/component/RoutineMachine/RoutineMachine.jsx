import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(59.84660399, 30.29496392),
      L.latLng(59.82934196, 30.42423701),
      L.latLng(59.83567701, 30.38064206)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
  });

  return instance; 
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;