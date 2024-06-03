import styles from "./styles.module.scss";
import { IProps } from "./props";

export const ContactUsBanner = (props: IProps) => {
  return (
    <div className={styles.content}>
      <p className={styles.description}>
        Book a car by getting in touch with us
      </p>
      <p className={styles.phone}>+7 (123) 456-7890</p>
    </div>
  );
};
