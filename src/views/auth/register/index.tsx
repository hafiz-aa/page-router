import Link from "next/link";
import styles from "./Register.module.scss";
const RegisterViews = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register Page</h1>
      <div className={styles.register__form}>
        <form action="">
          <div className={styles.register__form__item}>
            <label htmlFor="email" className={styles.register__form__item__label}>
              Email
            </label>
            <input type="email" className={styles.register__form__item__input} name="email" id="email" placeholder="Email" />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="fullname" className={styles.register__form__item__label}>
              Full Name
            </label>
            <input type="text" className={styles.register__form__item__input} name="fullname" id="fullname" placeholder="Full Name" />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password" className={styles.register__form__item__label}>
              Password
            </label>
            <input type="password" className={styles.register__form__item__input} name="password" id="password" placeholder="Password" />
          </div>
          <button className={styles.register__form__item__button}>Register</button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterViews;
