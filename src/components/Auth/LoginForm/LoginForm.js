import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Auth } from "@/api/auth";
import { useAuth } from "@/hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

import { initialValues, validationSchema } from "./LoginForm.form";

import styles from "./LoginForm.module.scss";
import { useRouter } from "next/router";

export function LoginForm() {
  const authCtrl = new Auth();
  const { login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.access);
        router.push("/");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <div className={styles.loginForm}>
      <div className={styles.logo}>
        <FaUserCircle />
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup floating>
          <Input
            name="email"
            placeholder="Correo"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Label for="exampleEmail">Usuario</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            name="password"
            placeholder="Password"
            type="password"        
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Label for="examplePassword">Contraseña</Label>
        </FormGroup>{" "}
        <Button block color="primary" size="lg" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

// function validationSchema() {
//   return {
//     email: Yup.string()
//       .email("No es un email valido!")
//       .required("Este campo es obligatorio!"),
//     password: Yup.string().required("Este campo es obligatorio!"),
//   };
// }
