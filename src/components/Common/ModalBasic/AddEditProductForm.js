import React, { useCallback, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  CardImg,
  Input,
  Label,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { Products } from "@/api/products";
import { useAuth } from "@/hooks/useAuth";

export default function AddEditProductForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const { accessToken } = useAuth();

  const productCtrl = new Products();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newScheme()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const responseProduct = await productCtrl.addProductApi(formValue, accessToken);
      console.log(responseProduct);
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
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Input
            id="nombre"
            name="nombre"
            placeholder={
              formik.errors.nombre ? "Campo obligatorio" : "Nombre Producto"
            }
            type="text"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={toString(formik.errors.nombre)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="referencia"
            name="referencia"
            placeholder="Referencia"
            type="text"
            value={formik.values.referencia}
            onChange={formik.handleChange}
            error={formik.errors.referencia}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="url"
            name="url"
            placeholder={formik.errors.nombre ? "Campo obligatorio" : "URL"}
            type="text"
            value={formik.values.url}
            onChange={formik.handleChange}
            error={formik.errors.url}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="grupo"
            name="grupo"
            placeholder="Grupo"
            type="text"
            value={formik.values.grupo}
            onChange={formik.handleChange}
            error={formik.errors.grupo}
          />
        </FormGroup>
        <FormGroup>
          <Label for="descripcion">Descripcion</Label>
          <Input
            id="descripcion"
            name="descripcion"
            type="textarea"
            value={formik.values.descripcion}
            onChange={formik.handleChange}
            error={formik.errors.descripcion}
          />
        </FormGroup>

        <FormGroup>
          <Input
            id="precioact"
            name="precioact"
            placeholder="Precio Actual"
            type="number"
            value={formik.values.precioact}
            onChange={formik.handleChange}
            error={formik.errors.precioact}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="precioant"
            name="precioant"
            placeholder="Precio Anterior"
            type="number"
            value={formik.values.precioant}
            onChange={formik.handleChange}
            error={formik.errors.precioant}
          />
        </FormGroup>
        {/* 
      <UncontrolledDropdown
    className="me-2"
    direction="end"
  >
    <DropdownToggle
      caret
      color="primary"
    >
      Dropend
    </DropdownToggle>
    <DropdownMenu>$
      <DropdownItem header>
        Header
      </DropdownItem>
      <DropdownItem disabled>
        Action
      </DropdownItem>
      <DropdownItem>
        Another Action
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Another Action
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown> */}

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

          <input {...getInputProps()} />
        </FormGroup>

        {/* <FormGroup switch>
        <Input
          type="switch"
          checked={activo}
          onChange={(data) => {
            console.log(data.target);
          }}
        />
        <Label check>Activo</Label>
      </FormGroup> */}

        {/* <FormGroup switch>
        <Input
          type="switch"
          checked={promocion}
          onClick={() => {
            setPromocion(!promocion);
          }}
        />
        <Label check>Promoción</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={exclusivo}
          onClick={() => {
            setExclusivo(!exclusivo);
          }}
        />
        <Label check>Exclusivo</Label>
      </FormGroup> */}

        <Button type="submit" block color="primary" outline size="lg">
          Grabar
        </Button>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    nombre: "",
    referencia: "",
    url: "",
    grupo: "",
    descripcion: "",
    precioact: "",
    precioant: "",
    active: true,
    image: "",
  };
}

function newScheme() {
  return {
    nombre: Yup.string().required(true),
    referencia: Yup.string(),
    url: Yup.string().required(true),
    grupo: Yup.string(),
    descripcion: Yup.string(),
    precioact: Yup.number(),
    precioant: Yup.number(),
    active: Yup.boolean(),
    image: Yup.string().required(true),
  };
}
