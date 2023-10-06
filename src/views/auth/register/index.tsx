import Link from "next/link";
import styles from "./Register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterViews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(true);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register Page</h1>
      {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
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
          <button className={styles.register__form__item__button}>{isLoading ? "Loading..." : "Register"}</button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterViews;
