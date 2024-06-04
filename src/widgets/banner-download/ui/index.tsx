import styles from "./styles.module.scss";
import { IProps } from "./props";
import Image from "next/image";
import { BannerTitle, PageTitle } from "shared/ui";
import Link from "next/link";

export const BannerDownload = (props: IProps) => {
  return (
    <section className={styles.content}>
      <div className={styles.left}>
        <BannerTitle title={"Download"} />
        <p className={styles.title}>
          Download Toureno App for <span className={styles.span}>FREE</span>
        </p>
        <p className={styles.subTitle}>
          For faster, easier booking and exclusive deals.
        </p>
        <div className={styles.links}>
          <Link href={""}>
            <Image
              src={"/img/common/google-play.png"}
              alt={"Google Play"}
              width={124}
              height={37}
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/img/common/app-store.png"}
              alt={"Google Play"}
              width={124}
              height={37}
            />
          </Link>
        </div>
      </div>
      <Image
        src={"/img/common/phone-download.png"}
        alt={"Phone Download"}
        width={521}
        height={428}
        className={styles.phone}
      />
      <Image
        src={"/img/common/bg-download.svg"}
        alt={"Bg Download"}
        width={777}
        height={702}
        className={styles.bg}
      />
    </section>
  );
};
