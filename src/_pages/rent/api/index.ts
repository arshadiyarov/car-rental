import axios from "axios";
import { Car } from "shared/common";

export const getCars = async (): Promise<Car[]> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return res.data;
};

export const putLike = async (id: string, liked: boolean): Promise<Car> => {
  const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
    liked,
  });
  return res.data;
};
