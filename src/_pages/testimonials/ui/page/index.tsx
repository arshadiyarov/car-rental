import styles from "./styles.module.scss";
import classNames from "classnames";
import { BannerTitle, ContactUsBanner, PageTitle } from "shared/ui";
import { CardReview } from "widgets/card-review";

export const Testimonials = () => {
  return (
    <>
      <main className={classNames("wrapper", styles.container)}>
        <div className={styles.content}>
          <div className={"flex flex-col items-center gap-2"}>
            <BannerTitle title={"Client's Testimonials"} />
            <PageTitle
              title={""}
              subTitle={
                "Hear From Our Valued Clients and Partners About Their Experiences with Us"
              }
            />
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
            />
          </div>
        </div>
      </main>
      <ContactUsBanner />
    </>
  );
};
