import { Advertisement, FooterApp, JoinLayout } from "@/components";

import Link from "next/link";

import styles from "./sign-in.module.scss";
import { BasicLayout } from "@/layouts";
import { useRouter } from "next/router";



import { useAuth } from "@/hooks/useAuth";

export default function singInPage() {
  const { user } = useAuth();
  const router = useRouter();


  if (user) {
    router.push("/");
    return null;
  }


  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      <div className={styles.singIn}>
        <h5>Iniciar sesión</h5>

        {/* <LoginForm /> */}

        <div className={styles.action}>
          <Link href="/">Volver al Catálogo</Link>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
