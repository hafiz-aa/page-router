import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-5xl text-slate-700">Login Page</h1>
      <button className="font-bold py-2 px-4 rounded" onClick={() => handleLogin()}>
        Login
      </button>
      <p style={{ color: "red" }}>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>di sini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
