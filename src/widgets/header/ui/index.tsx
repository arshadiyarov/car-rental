import { Logo, Button } from "shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { navContent } from "shared/common";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={classNames(styles.container, "bg-bgSecondary")}>
      <div className={classNames(styles.content, "wrapper")}>
        <Logo />
        <ul className={styles.nav}>
          {navContent.map((i, index) => (
            <li key={index} className={styles.li}>
              <Link href={i.href} className={styles.link}>
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <Button mode={"icon"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#596780"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};