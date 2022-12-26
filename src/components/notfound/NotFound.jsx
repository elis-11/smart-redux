import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.App}>
    <div className={styles.NotFound}>
      <div className={styles.content}>
        {/* <img alt="card" 
      src={`https://source.unsplash.com/1000x1000/`} /> */}
        <h2 className={styles.title}>Page not found</h2>
        <h4 className={styles.text}>
          Hmmm, the page you were looking for doesn't seem to exist anymore...
        </h4>
        <NavLink className={styles.button} to="/">Back to Home</NavLink>
      </div>
      </div>
    </div>
  );
};
