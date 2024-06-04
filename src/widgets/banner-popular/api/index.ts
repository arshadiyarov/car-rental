import axios from "axios";
import { Car } from "shared/common";

export const getCars = async (): Promise<Car[]> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return res.data;
};
