import styles from "./styles.module.scss";
import { IProps } from "./props";
import Skeleton from "react-loading-skeleton";

export const CardSkeleton = (props: IProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.title}>
          <Skeleton
            baseColor={"var(--clr-primary-skeleton-base)"}
            highlightColor={"var(--clr-primary-skeleton-highlight)"}
            borderRadius="25px"
          />
          <Skeleton
            baseColor={"var(--clr-secondary-skeleton-base)"}
            highlightColor={"var(--clr-secondary-skeleton-highlight)"}
            borderRadius="25px"
          />
        </div>
        <img src="img/utils/heart-fill.svg" alt="heart" />
      </div>
      <img
        src="img/utils/gallery.svg"
        alt="Gallery"
        width={70}
        height={70}
        className={"self-center"}
      />
      <div className={styles.mid}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Skeleton
              baseColor={"var(--clr-secondary-skeleton-base)"}
              highlightColor={"var(--clr-secondary-skeleton-highlight)"}
              borderRadius="25px"
            />
          </div>
          <div className={styles.infoItem}>
            <Skeleton
              baseColor={"var(--clr-secondary-skeleton-base)"}
              highlightColor={"var(--clr-secondary-skeleton-highlight)"}
              borderRadius="25px"
            />
          </div>
          <div className={styles.infoItem}>
            <Skeleton
              baseColor={"var(--clr-secondary-skeleton-base)"}
              highlightColor={"var(--clr-secondary-skeleton-highlight)"}
              borderRadius="25px"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>
            <Skeleton
              baseColor={"var(--clr-primary-skeleton-base)"}
              highlightColor={"var(--clr-primary-skeleton-highlight)"}
              borderRadius="25px"
            />
            <Skeleton
              baseColor={"var(--clr-secondary-skeleton-base)"}
              highlightColor={"var(--clr-secondary-skeleton-highlight)"}
              borderRadius="25px"
            />
          </div>
          <div className={styles.btn}>
            <Skeleton
              baseColor={"var(--clr-primary-hover)"}
              highlightColor={"var(--clr-primary)"}
              borderRadius="8px"
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
