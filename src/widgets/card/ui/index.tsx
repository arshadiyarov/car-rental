import styles from "./styles.module.scss";
import { IProps } from "./props";
import { Like } from "features/like";
import { Button } from "shared/ui";
export const Card = ({ carData, onLike }: IProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div>
          <p className={styles.name}>{carData.name}</p>
          <p className={styles.mode}>{carData.mode}</p>
        </div>
        <Like liked={carData.liked} carId={carData.id} onLike={onLike} />
      </div>
      <img src={carData.img} className={styles.img} alt="Car img" />
      <div className={styles.mid}>
        <div className={styles.midContent}>
          <div className={styles.info}>
            <img src="img/utils/gas-station.svg" alt="Gas Station" />
            <p>{carData.fuel}L</p>
          </div>
          <div className={styles.info}>
            <img src="img/utils/wheel.svg" alt="Wheel" />
            <p>{carData.transmission}</p>
          </div>
          <div className={styles.info}>
            <img src="img/utils/users.svg" alt="Users" />
            <p>{carData.seats} People</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>
            {carData.discountPrice ? (
              <>
                <p className={styles.discount}>
                  ${carData.discountPrice}/ <span>day</span>
                </p>
                <p className={styles.actual}>${carData.actualPrice}</p>
              </>
            ) : (
              <p className={styles.actualSecond}>
                ${carData.actualPrice}/ <span>day</span>
              </p>
            )}
          </div>
          <Button uppercase={false}>Rent Now</Button>
        </div>
      </div>
    </div>
  );
};
