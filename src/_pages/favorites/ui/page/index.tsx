"use client";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Car } from "shared/common";
import { getFavourites } from "_pages/favorites/api";
import { Card } from "widgets/card";
import { putLike } from "_pages/favorites/api";
import Link from "next/link";
import { SectionHeader } from "shared/ui";

export const Favorites = () => {
  const [favouriteCars, setFavouriteCars] = useState<Car[]>([]);

  const fetchFavouriteCars = async () => {
    const res = await getFavourites();
    const favourites = res.filter((c) => c.liked);
    setFavouriteCars(favourites);
  };

  const updateLike = async (id: string) => {
    const updatedCars = favouriteCars.map((c) => {
      if (c.id === id) {
        const updatedCar = { ...c, liked: !c.liked };
        putLike(id, updatedCar.liked);
        return updatedCar;
      }
      return c;
    });

    setFavouriteCars(updatedCars);
  };

  useEffect(() => {
    fetchFavouriteCars();
  }, []);

  return (
    <main className={classNames("wrapper", styles.container)}>
      <div className={styles.content}>
        <SectionHeader title={"Favorite Cars"} />
        {!!favouriteCars.length ? (
          <div className={styles.favouriteCars}>
            {favouriteCars.map((c) => (
              <Card key={c.id} carData={c} onLike={updateLike} />
            ))}
          </div>
        ) : (
          <div>
            <p className={"text-center"}>
              Your list of favorite cars is currently empty.
            </p>
            <p className={"text-center"}>
              Start adding your favorite cars on the{" "}
              <Link href={"/rent"} className={"text-primary hover:underline"}>
                cars page
              </Link>
              !
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
