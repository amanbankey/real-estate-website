import React from "react";
import { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { Link, NavLink } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { housesData } from "../data";
import Newhouse from "./Newhouse";
import PropertyDetails from "../pages/PropertyDetails";

const HouseList = () => {
  // console.log("HoseContext", HouseContext);
  const { houses, loading } = useContext(HouseContext);
  // console.log("houses: ", houses);

  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px] " />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48 ">
        Sorry nothing found...
      </div>
    );
  }
  return (
    <section className="mb-20  ">
      <div className="container mx-auto ">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((home, index) => {
            // console.log("home: ", home);
            return (
              <Link to={`/property/${home.id}`} key={index}>
                <Newhouse
                  image={home.image}  type={home.type}
                  country={home.country}  price={home.price}
                  address={home.address}  bathrooms={home.bathrooms}
                  bedrooms={home.bedrooms}  surface={home.surface}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
