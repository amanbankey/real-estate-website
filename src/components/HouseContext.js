import React from "react";
import { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property range (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);
  // console.log("houses::::", houses[0].image);
  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allCountries);

    // remove duplicate
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // console.log(uniqueCountries);
    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // console.log(allProperties);

    // remove duplicate
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    console.log(uniqueProperties);
    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);


    // create a function that checkes if the string include (any)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    // console.log( " def : ",  isDefault(country));
    // console.log(isDefault(country));
    const minPrice = Number(price.split("-")[0]);
    //  console.log(minPrice);
    const maxPrice = Number(price.split("-")[1]);
    //  console.log("minPrice: ", minPrice)
    const newHouses = housesData.filter((house) => {
      const housePrice = Number(house.price);

      // if all value are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all value are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default;
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //  property & price is not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      setTimeout(() => {
        return (
          newHouses.length < 1 ? setHouses([]) : console.log("hello"),
          setHouses(newHouses),
          setLoading(false)
        );
      }, 1000);

      
    });
  };
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setProperty,
        property,
        properties,
        price,
        setPrice,
        houses,
        setHouses,
        loading,
        handleClick,
        setTimeout,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export default HouseContextProvider;
