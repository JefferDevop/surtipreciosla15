import { map } from "lodash";
import styles from "./ListProduts.module.scss";
import { Available } from "./Available";
import { SoldOut } from "./SoldOut";

export function Listproducts(props) {
  const { products, title } = props;

  return (
    <div className={styles.product}>
     <h4>{title}</h4>
    <div className={styles.listProduct}>
   
      <div className={styles.product}>
        {map(products, (product, index) => (
          <div className={styles.content_image} key={index}>
            {product.productData.active && (
              <>
                {!product.productData.soldout ? (
                 <Available key={index} product={product} />
                ) : (
                  <SoldOut kay={index} product={product} />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
