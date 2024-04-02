import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import headdless ul
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries, houses, price, property } = useContext(HouseContext);

  // console.log("house: ", houses);
  const [isOpen, setIsOpen] = useState(false);
  // console.log("countries", countries)
  return (
    
    <Menu as="dev" className="dropdown relative ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full  text-left "
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {country}
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
        {countries.map((country, index) => {
          return (
            <Menu.Items
              onClick={() => setCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition "
              as="li"
              key={index}>

              {country}
            </Menu.Items>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
export default CountryDropdown;
