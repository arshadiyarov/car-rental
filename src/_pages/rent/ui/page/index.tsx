"use client";

import classNames from "classnames";
import styles from "./styles.module.scss";
import { PickDrop } from "widgets/pick-drop";
import { Button, SectionHeader } from "shared/ui";
import { Card } from "widgets/card";
import { useEffect, useState } from "react";
import { Car, skeletonArr } from "shared/common";
import { getCars, putLike } from "_pages/rent/api";
import { CardSkeleton } from "widgets/card-skeleton";

interface Data {
  city: string;
  date: string;
  time: string;
}

export const Rent = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pickData, setPickData] = useState<Data>({
    city: "",
    date: "",
    time: "",
  });
  const [dropData, setDropData] = useState<Data>({
    city: "",
    date: "",
    time: "",
  });

  const handlePickUpChange = (key: keyof Data, val: string) => {
    setPickData((prevState) => ({ ...prevState, [key]: val }));
  };

  const handleDropOffChange = (key: keyof Data, val: string) => {
    setDropData((prevState) => ({ ...prevState, [key]: val }));
  };

  const handleSwitchClick = () => {
    const temp = { ...pickData };
    setPickData(dropData);
    setDropData(temp);
  };

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const res = await getCars();
      setCarsData(Array.isArray(res) ? res : []);
    } catch (error) {
      console.error("Failed to fetch cars:", error);
      setCarsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateLike = async (id: string) => {
    const updatedCars = carsData.map((c) => {
      if (c.id === id) {
        const updatedCar = { ...c, liked: !c.liked };
        putLike(id, updatedCar.liked);
        return updatedCar;
      }
      return c;
    });

    setCarsData(updatedCars);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <main className={classNames("wrapper", styles.container)}>
      <div className={styles.content}>
        <div className={styles.pickDrop}>
          <PickDrop
            title={"Pick-Up"}
            {...pickData}
            dataChange={handlePickUpChange}
          />
          <Button mode={"square"} size={"lg"} onClick={handleSwitchClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96"
              ></path>
            </svg>
          </Button>
          <PickDrop
            title={"Drop-Off"}
            {...dropData}
            dataChange={handleDropOffChange}
          />
        </div>
        <SectionHeader title={"Popular Cars"} />
        <div className={styles.popularCars}>
          {isLoading ? (
            skeletonArr.map((_, index) => <CardSkeleton key={index} />)
          ) : carsData.length > 0 ? (
            carsData.map(
              (c) =>
                c.popular && (
                  <Card key={c.id} carData={c} onLike={updateLike} />
                ),
            )
          ) : (
            <div>No popular cars available.</div>
          )}
        </div>
        <SectionHeader title={"Recommended Cars"} />
        <div className={styles.recommendedCars}>
          {isLoading ? (
            skeletonArr.map((_, index) => <CardSkeleton key={index} />)
          ) : carsData.length > 0 ? (
            carsData.map((c) => (
              <Card key={c.id} carData={c} onLike={updateLike} />
            ))
          ) : (
            <div>No recommended cars available.</div>
          )}
        </div>
      </div>
    </main>
  );
};
