import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";

import MenuRoutesItems from "./MenuRoutesItem/MenuRoutesItems";
import { getRoutes } from "../../redux/slices/routesSlice";

const MenuRoutes = () => {
  const { routes } = useSelector(getRoutes);
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {routes.map((route) => {
        return (
          <MenuRoutesItems
            name={route.name}
            id={route.id}
            key={route.id}
            active={route.active}
            coordinates={route.coordinates}
          />
        );
      })}
    </Menu>
  );
};

export default MenuRoutes;
