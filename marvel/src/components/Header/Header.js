import { Menu } from "semantic-ui-react";
import "./Header.scss";
import { useState } from "react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
}
