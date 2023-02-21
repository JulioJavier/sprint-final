import React from "react";
import { useData } from "../context/DataContext";
import StarRating from "./StartRating";

const CardRestaurant = () => {
  const { saveData, updatedDbFirestore, encontrarCategoria } = useData();
  console.log("Cards");

  const prueba = async () => {
    console.log(await encontrarCategoria("snacks"));
  };
  prueba();
  console.log(updatedDbFirestore);

  return (
    <div className="h-96 w-full overflow-x-scroll p-2">
      {updatedDbFirestore &&
        Object.keys(updatedDbFirestore).map((key) => {
          return (
              <div className="flex w-full h-32 mt-2 p-2 gap-2">
                <div className="w-36 h-full">
                  <img
                    className="w-full h-full rounded-xl"
                    src={updatedDbFirestore[key].banner}
                    alt="banner"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h5 className="">{updatedDbFirestore[key].name}</h5>
                  <StarRating
                    rating={updatedDbFirestore[key].stars}
                    maxStars={5}
                  />
                  <p>Work time: {updatedDbFirestore[key].schedule}</p>
                </div>
              </div>
          );
        })}
      <h1></h1>
    </div>
  );
};

export default CardRestaurant;
