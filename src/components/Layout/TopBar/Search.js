import React from "react";
import { CardImg, CardTitle } from "reactstrap";
import { map, size } from "lodash";
import { BASE_NAME } from "@/config/constants";

import styles from "./TopBar.module.scss";
import Link from "next/link";
import { FooterApp } from "@/components/FooterApp";

export function Search(props) {
  const { products } = props;

  return (
    <>
      <div className={styles.category}>
        <h2>{size(products)} Productos Encontrados</h2>
      </div>

      <div className={styles.list}>
        {map(products, (product, index) => (
          <div  key={index} className={styles.list__product}>
            <div>
              <Link href={`/${product.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.images}
                />
                <div className={styles.product}>
                  <CardTitle className={styles.title}>
                    <h5>
                      {product.name_extend}
                    </h5>

                    {product.price1 !== null && (
                      <h6>$ {product.price1}</h6>
                    )}
                  </CardTitle>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <FooterApp />
    </>
  );
}
