import styles from "./styles.module.scss";
import { IProps } from "./props";
import { BannerTitle, PageTitle } from "shared/ui";
import { CardReview } from "widgets/card-review";
import Image from "next/image";
import classNames from "classnames";

export const BannerReviews = (props: IProps) => {
  return (
    <section className={styles.content}>
      <Image
        src={"/img/utils/quote-bottom.svg"}
        alt={"Quote Icon"}
        width={292}
        height={310}
        className={classNames(styles.quoteIcon, styles.bottom)}
      />
      <Image
        src={"/img/utils/quote-top.svg"}
        alt={"Quote Icon"}
        width={292}
        height={310}
        className={classNames(styles.quoteIcon, styles.top)}
      />
      <div className={styles.top}>
        <BannerTitle title={"Testimonials"} />
        <PageTitle title={"What peole say about us?"} subTitle={""} />
      </div>
      <div className={styles.reviews}>
        <CardReview
          review={
            "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
          }
          fullName={"Nikola Kovač"}
          city={"Almaty"}
          pfp={"/img/common/user-1.jpg"}
        />
        <CardReview
          review={
            "“The car rental process was quick and easy, and the car was in perfect condition. I'll definitely use this service again for its convenience.”"
          }
          fullName={"Ilya Osipov"}
          city={"Astana"}
          pfp={"/img/common/user-2.jpg"}
        />{" "}
      </div>
    </section>
  );
};
