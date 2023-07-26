import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import RoutineMachine from "../RoutineMachine/RoutineMachine";

const Map = () => {
  return (
    <MapContainer className="main" zoom={14} center={[51.505, -0.09]}>
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
      <RoutineMachine />
    </MapContainer>
  );
};

export default Map;
