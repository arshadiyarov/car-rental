import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const Like = (props: IProps) => {
  const {
    liked,
    onLike,
    carId,
    disabled,
    className,
    onClick,
    type,
    ...otherProps
  } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => onLike(carId)}
      className={classNames(styles.button, className)}
      {...otherProps}
    >
      {liked ? (
        <img src="img/utils/heart-fill.svg" alt="Heart Fill" />
      ) : (
        <img src="img/utils/heart-outline.svg" alt="Heart Outline" />
      )}
    </button>
  );
};
