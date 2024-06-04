import styles from "./styles.module.scss";
import { IProps } from "./props";
import Image from "next/image";
import { BannerTitle, PageTitle } from "shared/ui";
import classNames from "classnames";

export const BannerWhyUs = (props: IProps) => {
  return (
    <section className={styles.content}>
      <Image
        src={"/img/common/bg-why-us.svg"}
        alt={"Bg why us"}
        width={777}
        height={702}
        className={styles.bg}
      />
      <Image
        src={"/img/common/Car-why-us.png"}
        alt={"Audi"}
        width={813}
        height={359}
        className={styles.car}
      />
      <div className={styles.placeholder}></div>
      <div className={styles.right}>
        <BannerTitle title={"Why Choose Us"} />
        <PageTitle
          title={"We offer the best experience with our rental deals"}
          subTitle={""}
        />
        <div className={styles.pros}>
          <div className={styles.prosItem}>
            <div className={styles.icon}>
              <Image
                src={"/img/utils/wallet.svg"}
                alt={"Wallet"}
                width={36}
                height={36}
              />
            </div>
            <div className={classNames(styles.prosText, "space-y-2")}>
              <p className={styles.title}>Best price guaranteed</p>
              <p className={styles.subTitle}>
                Find a lower price? We’ll refund you 100% of the difference.
              </p>
            </div>
          </div>
          <div className={styles.prosItem}>
            <div className={styles.icon}>
              <Image
                src={"/img/utils/user-tick.svg"}
                alt={"User Tick"}
                width={36}
                height={36}
              />
            </div>
            <div className={classNames(styles.prosText, "space-y-2")}>
              <p className={styles.title}>Experience driver</p>
              <p className={styles.subTitle}>
                Don’t have driver? Don’t worry, we have many experienced.
              </p>
            </div>
          </div>
          <div className={styles.prosItem}>
            <div className={styles.icon}>
              <Image
                src={"/img/utils/location-tick.svg"}
                alt={"Location Yick"}
                width={36}
                height={36}
              />
            </div>
            <div className={classNames(styles.prosText, "space-y-2")}>
              <p className={styles.title}>24 hour car delivery</p>
              <p className={styles.subTitle}>
                Book your car anytime and we will deliver it directly to you.
              </p>
            </div>
          </div>
          <div className={styles.prosItem}>
            <div className={styles.icon}>
              <Image
                src={"/img/utils/messages-2.svg"}
                alt={"Messages"}
                width={36}
                height={36}
                className={styles.lastIcon}
              />
            </div>
            <div className={classNames(styles.prosText, "space-y-2")}>
              <p className={styles.title}>24/7 technical support</p>
              <p className={styles.subTitle}>
                Have a question? Contact Toureno support any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
