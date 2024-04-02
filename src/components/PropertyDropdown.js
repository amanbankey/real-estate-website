import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import headdless ul
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  // console.log("properties: ", properties);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="dev" className="dropdown relative ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"   >
        <RiHome5Line className="dropdown-icon-primary " />
        <div className="">
          <div className="text-[15px] font-medium leading-tight ">
            {property}
          </div>
          <div className="text-[13px] ">
            <p>Select your place </p>
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Items
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition "
              as="li"
              key={index}
            >
              {property}
            </Menu.Items>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
export default PropertyDropdown;
