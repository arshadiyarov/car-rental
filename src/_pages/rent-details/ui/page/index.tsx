"use client";

import styles from "./styles.module.scss";
import { useParams } from "next/navigation";

export const RentDetails = () => {
  const { carId } = useParams();

  return <div>{carId}</div>;
};
