import styles from "./styles.module.scss";
import { IProps } from "./props";
import { BannerTitle, PageTitle } from "shared/ui";
import Image from "next/image";
import classNames from "classnames";

export const BannerHowItWork = (props: IProps) => {
  return (
    <section className={classNames(styles.content, "space-y-14")}>
      <div className={styles.top}>
        <BannerTitle title={"How It Work"} />
        <PageTitle
          title={"Rent with following 3 working steps"}
          subTitle={""}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={"/img/utils/location-tick.svg"}
              alt={"Location Tick"}
              width={48}
              height={48}
            />
          </div>
          <p className={styles.itemTitle}>Choose location</p>
          <p className={styles.itemSubtitle}>
            Choose your and find your best car
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={"/img/utils/calendar.svg"}
              alt={"Calendar"}
              width={48}
              height={48}
            />
          </div>
          <p className={styles.itemTitle}>Pick-up date</p>
          <p className={styles.itemSubtitle}>
            Select your pick up date and time to book your car
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={"/img/utils/car.svg"}
              alt={"Car"}
              width={48}
              height={48}
            />
          </div>
          <p className={styles.itemTitle}>Book your car</p>
          <p className={styles.itemSubtitle}>
            Book your car and we will deliver it directly to you
          </p>
        </div>
      </div>
    </section>
  );
};
