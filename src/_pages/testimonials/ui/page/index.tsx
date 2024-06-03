import styles from "./styles.module.scss";
import classNames from "classnames";
import { ContactUsBanner, PageTitle } from "shared/ui";
import { CardReview } from "widgets/card-review";

export const Testimonials = () => {
  return (
    <>
      <main className={classNames("wrapper", styles.container)}>
        <div className={styles.content}>
          <PageTitle
            title={"Client's Testimonials"}
            subTitle={
              "Hear From Our Valued Clients and Partners About Their Experiences with Us"
            }
          />
          <div className={styles.reviews}>
            <CardReview
              review={
                '"Renting a car through this service was smooth and hassle-free, the vehicle was clean and exactly as described. Highly recommend for its efficiency and excellent customer support."'
              }
              fullName={"Nikola Kovač"}
              city={"Almaty"}
              pfp={"/img/common/user-1.jpg"}
            />
            <CardReview
              review={
                '"The car rental process was quick and easy, and the car was in perfect condition. I\'ll definitely use this service again for its convenience."'
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
