"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { useParams } from "next/navigation";

export const RentDetails = (props: IProps) => {
  const { carId } = useParams();

  return <div>{carId}</div>;
};
