import styles from "./styles.module.scss";
import classNames from "classnames";
import { BannerTitle, ContactUsBanner, PageTitle } from "shared/ui";
import { CardPerson } from "widgets/card-person";

export const Team = () => {
  return (
    <>
      <main className={classNames("wrapper", styles.container)}>
        <div className={styles.content}>
          <div className={styles.top}>
            <BannerTitle title={"Our Team"} />
            <PageTitle
              title={""}
              subTitle={
                "The Brilliant Minds and Dedicated Professionals Who Make Our Success Possible"
              }
            />
          </div>
          <div className={styles.team}>
            <CardPerson
              fullName={"Luke Miller"}
              position={"Salesman"}
              href={"/img/common/person-1.png"}
            />
            <CardPerson
              fullName={"Michael Diaz"}
              position={"Business Owner"}
              href={"/img/common/person-2.png"}
            />
            <CardPerson
              fullName={"Briana Ross"}
              position={"Photographer"}
              href={"/img/common/person-3.png"}
            />
            <CardPerson
              fullName={"Lauren Rivera"}
              position={"Car Detailist"}
              href={"/img/common/person-4.png"}
            />
            <CardPerson
              fullName={"Martin Rizz"}
              position={"Mechanic"}
              href={"/img/common/person-5.png"}
            />
            <CardPerson
              fullName={"Caitlyn Hunt"}
              position={"Menager"}
              href={"/img/common/person-6.png"}
            />
          </div>
        </div>
      </main>
      <ContactUsBanner />
    </>
  );
};
