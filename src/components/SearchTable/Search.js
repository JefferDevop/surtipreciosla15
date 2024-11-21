import React from "react";
import { CardImg, CardTitle } from "reactstrap";
import { map, size } from "lodash";
import { BASE_NAME } from "@/config/constants";

import styles from "./SearchTable.module.scss";
import Link from "next/link";
import { FooterApp } from "@/components/FooterApp";

export function Search(props) {
  const { products } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <>
      {size(products) == 1 ? (
        <div className={styles.category}>
          <h2>Un Producto Encontrado</h2>
        </div>
      ) : (
        <div className={styles.category}>
          <h2>{size(products)} Productos Encontrados</h2>
        </div>
      )}

      <div className={styles.list}>
        {map(products, (product, index) => (
          <div key={index} className={styles.list__product}>
            <Link href={`/${product.slug}`}>
              {product.images ? (
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.images}
                />
              ) : (
                <CardImg alt="Card image cap" src={product.image_alterna} />
              )}
              <div className={styles.product}>
                <CardTitle className={styles.title}>
                  <p>{product.name_extend}</p>                
                </CardTitle>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <FooterApp />
    </>
  );
}
