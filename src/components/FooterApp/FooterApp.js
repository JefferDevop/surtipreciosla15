import React, { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useWhatsApp } from "@/hooks/useWhatsApp";

import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

import styles from "./FooterApp.module.scss";

import { BtnLink, BtnModal } from "../Common";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";

export function FooterApp() {
  const { total } = useCart();
  const { generateWhatsAppLink, items, selectedItem, handleItemClick } =
    useWhatsApp();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addData = () => {
    const whatsappLink = generateWhatsAppLink(
      selectedItem,
      "Hola he visto tu Catálogo, me gustaría obtener más información sobre sus productos."
    );

    window.location.href = whatsappLink;
    toggleModal();
  };

  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={20} color='#dfc979' />} />
        <BtnLink
          link={"/featured"}
          title={"EXCL"}
          logo={<BsSearch size={20} color='#dfc979' />}
        />

        <Button
          className={styles.whatsapp}
          color="succefull"
          onClick={() => toggleModal()}
        >
          <BsWhatsapp size={30} color="green" />
        </Button>

        <div className={styles.cart}>
          <p>{total}</p>
          <BtnLink
            link={"/cart"}
            title={"CART"}
            logo={<AiOutlineShoppingCart size={20} color='#dfc979' />}
          />
        </div>

        {/* <BtnLink
          link={"https://cristaleriala10.catalogointeractivo.com.co/admin-dashboard/"}
          title={"ADMI"}
          logo={<CiUser size={20} color='#dfc979' />}
        /> */}

        <BtnModal />
      </div>
     

      <Modal centered isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Seleccione una Linea</ModalHeader>

        <ModalBody>
          <FormGroup>
            {items.map((item, index) => (
              <Button
                key={index}
                color="success"
                outline
                size="sm"
                className={index === selectedItem ? "selected" : ""}
                onClick={() => handleItemClick(item)}
              >
                <BsWhatsapp size={20} /> Linea {index + 1}
              </Button>
            ))}
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button outline size="sm" color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
          <Button size="sm" color="success" onClick={addData}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
