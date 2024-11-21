import { useState, useCallback } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Categories } from "@/api/category";
import * as Yup from "yup";
import { Button, CardImg, Form, FormGroup, Input, Label } from "reactstrap";
import { useDropzone } from "react-dropzone";
import { useAuth } from "@/hooks/useAuth";

// import { initialValues, validationSchema } from "./LoginForm.form";

import styles from "./FormCategory.module.scss";

export function FormCategory(props) {
  const { data, onClose } = props;
  const [previewImage, setPreviewImage] = useState(null);

  const categoryCtrl = new Categories();

  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newScheme()),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      try {
        const responseCategory = await categoryCtrl.addCategoryApi(
          formValue,
          accessToken
        );
        
        console.log("eee");

      
        // history.push(`/`);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    await formik.setFieldValue("image", file);
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    // accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div className={styles.formCategory}>
      <h1>{data}</h1>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup floating>
            <Input
              id="name"
              name="name"
              placeholder="Nombre Categoría"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Label for="category">Nombre Categoría</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              id="slug"
              name="slug"
              placeholder="Url"
              type="text"
              value={formik.values.slug}
              onChange={formik.handleChange}
              error={toString(formik.errors.slug)}
              className={styles.slug}
            />
            <Label for="category">Url</Label>
          </FormGroup>{" "}
          <FormGroup>
            <CardImg src={previewImage} />

            <Button
              type="button"
              block
              color={formik.errors.image && "danger"}
              size="lg"
              {...getRootProps()}
            >
              Subir Imagen
            </Button>
          </FormGroup>
          <input {...getInputProps()} />
          <Button block color="primary" size="lg" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}

function initialValues() {
  return {
    name: "",
    slug: "",
    image: "",
  };
}

function newScheme() {
  return {
    name: Yup.string().required(true),
    slug: Yup.string().required(true),
    image: Yup.string().required(true),
  };
}
