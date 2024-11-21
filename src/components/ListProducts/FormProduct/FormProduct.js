import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// import { initialValues, validationSchema } from "./LoginForm.form";

import styles from "./FormProduct.module.scss";

export function FormProduct() {
  // const formik = useFormik({
  //   // initialValues: initialValues(),
  //   // validationSchema: validationSchema(),
  //   // validateOnChange: false,

  //   // onSubmit: async (formValue) => {
  //   //   try {
  //   //     const response = await authCtrl.login(formValue);
  //   //     login(response.access)

  //   //     // history.push(`/`);
  //   //   } catch (error) {
  //   //     toast.error(error.message);
  //   //   }
  //   // },
  // });

  return (
    <div className={styles.formProduct}>
      <h1> Formulario de Producto</h1>

      <div>
        <Form>
          <FormGroup floating>
            <Input name="product" placeholder="product" type="text" />
            <Label for="product">Nombre Producto</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input name="product" placeholder="product" type="text" />
            <Label for="product">Nombre Producto</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input name="product" placeholder="product" type="text" />
            <Label for="product">Nombre Producto</Label>
          </FormGroup>{" "}          
          
          <Button block color="primary" size="lg" type="submit">
            Subir Imagen
          </Button>
          <Button block color="primary" size="lg" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}
