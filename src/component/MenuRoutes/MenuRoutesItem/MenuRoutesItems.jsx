import { Menu } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setActiveStatus } from "../../../redux/slices/routesSlice";

const MenuRoutesItems = ({ name, active, id, coordinates }) => {
  const dispatch = useDispatch();

  const onClickRouteItem = async () => {
    const coordinatesToString = coordinates
      .map((coordinate) => {
        return `${coordinate.lat},${coordinate.lng}`;
      })
      .join(";");
    const res = await axios.get(`http://router.project-osrm.org/route/v1/car/${coordinatesToString}?alternatives=true&steps=true&geometries=polyline&overview=full&annotations=true`);
    console.log(res);
    if (id !== undefined) {
      dispatch(setActiveStatus(id));
    }
  };

  return (
    <Menu.Item
      onClick={onClickRouteItem}
      style={{ background: !active && "transparent" }}
      key={id}
    >
      <span style={{ marginLeft: 10 }}>{name}</span>
    </Menu.Item>
  );
};

export default MenuRoutesItems;
