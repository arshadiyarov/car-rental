"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import Image from "next/image";
import classNames from "classnames";
import { Button, ButtonStore } from "shared/ui";
import { useRouter } from "next/navigation";

export const BannerMain = (props: IProps) => {
  const router = useRouter();

  return (
    <section className={styles.content}>
      <div className={styles.left}>
        <p className={styles.title}>
          Find, book and rent a car <span className={styles.span}>Easily</span>
        </p>
        <p className={styles.subtitle}>
          Get a car wherever and whenever you need it with your IOS and Android
          device.
        </p>
        <div className={styles.links}>
          <Button onClick={() => router.push("/rent")} size={"md"}>
            Rent Car
          </Button>
        </div>
      </div>
      <Image
        className={styles.car}
        src={"/img/common/Car-main.png"}
        alt={"Car"}
        width={850}
        height={500}
      />
      <Image
        className={styles.bg}
        src={"/img/common/bg-main.svg"}
        alt={"Bg"}
        width={574}
        height={800}
      />
    </section>
  );
};
