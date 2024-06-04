import axios from "axios";
import { Car } from "shared/common";

export const getFavourites = async (): Promise<Car[]> => {
  const res = await axios.get(
    `https://665c3c1b3e4ac90a04d9021e.mockapi.io/cars`,
  );
  return res.data;
};

export const putLike = async (id: string, liked: boolean): Promise<Car> => {
  const res = await axios.put(
    `https://665c3c1b3e4ac90a04d9021e.mockapi.io/cars/${id}`,
    {
      liked,
    },
  );
  return res.data;
};
