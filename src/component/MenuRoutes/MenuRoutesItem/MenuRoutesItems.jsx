import { Menu } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { route, setActiveStatus } from "../../../redux/slices/routesSlice";

const MenuRoutesItems = ({ name, active, id, coordinates }) => {
  const dispatch = useDispatch();

  const onClickRouteItem = async () => {
    const coordinatesToString = coordinates
      .map((coordinate) => {
        return `${coordinate.lat},${coordinate.lng}`;
      })
      .join(";");
    if (id !== undefined) {
      dispatch(setActiveStatus(id));
      dispatch(route(coordinatesToString));
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
