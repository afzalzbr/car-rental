"use client";

import { Vehicle } from "@/types";
import React, { useEffect, useState } from "react";

const CarDetailsPage = ({ id }: { id: string }) => {
  const [car, setCarData] = useState<(Vehicle & { images: string[] }) | null>(
    null
  );

  useEffect(() => {
    const fetchCarData = async () => {
      if (id) {
        const data = JSON.parse(localStorage.getItem(id) || "{}");
        setCarData(data);
      }
    };

    fetchCarData();
  }, [id]);

  if (!car) return <div>loading...</div>;

  return (
    <div className={"car-details-container"}>
      <div className={"car-images"}>
        {car?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car ${index}`}
            className={"car-image"}
          />
        ))}
      </div>
      <div className={"car-details"}>
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="font-semibold text-xol capitalize">
            {car?.make} {car?.model}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4">
            {Object.entries(car).map(
              ([key, value]) =>
                key !== "images" && (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h1 className="text-gray capitalize">
                      {key?.split("_").join(" ")}
                    </h1>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
