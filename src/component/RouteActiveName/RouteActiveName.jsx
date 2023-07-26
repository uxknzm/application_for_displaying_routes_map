import React from "react";
import { useSelector } from "react-redux";
import { getActiveRoute } from "../../redux/slices/routesSlice";

const RouteActiveName = () => {
  const route = useSelector(getActiveRoute);

  return (
    <strong style={{ marginLeft: 20 }}>Название маршрута: {route?.name || "Выберите маршрут"}</strong>
  );
};

export default RouteActiveName;
