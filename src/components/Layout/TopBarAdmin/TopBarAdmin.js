import React, { useState } from "react";
import styles from "./TopBarAdmin.module.scss";
import { CardImg } from "reactstrap";
import classNames from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { Search } from "../TopBar/Search"; 
import { Products } from "@/api/products";

export function TopBarAdmin() {
  const [estado, setEstado] = useState(false);
  const [products, setProducts] = useState({});
  const [finds, setFinds] = useState("");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);


  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

  async function updateState(e) {
    const data = e.target.value;
    setSearch(data);
    setEstado(data);

    if (!estado) {
      const productsCtrl = new Products();
      const responseProduct = await productsCtrl.getProducts();
      setProducts(responseProduct);
      console.log("consulta");
    }
    if (estado) {
      filter(data);
    }
  }

  const filter = (filterTo) => {
    var result = products.filter((item) => {
      if (
        item.name_extend
          .toString()
          .toLowerCase()
          .includes(filterTo.toLowerCase()) ||
        item.description
          .toString()
          .toLowerCase()
          .includes(filterTo.toLowerCase()) ||
        item.description
          .toString()
          .toLowerCase()
          .includes(filterTo.toLowerCase())
      ) {
        return item;
      }
    });
    setFinds(result);
  };

  const changeStatus = () => {
    setEstado(false);
  };

  return (
    <>
      <div className={styles.topBar}>
        <Link href="/" onClick={() => changeStatus()}>
          <CardImg
            src="/image/logo-surtipapeleriala15-1.png"
            alt="SURTIPRECIOS"
          />{" "}
        </Link>

        <div className={styles.icon}>
          <div className={styles.searchOption}>
            <input
              onFocus={updateState}
              onBlur={updateState}
              onChange={updateState}
              value={search}
              className={classNames(styles.searchOption, {
                [styles.active]: showSearch,
              })}            
            />

            <button className={styles.search} onClick={openCloseSearch}>
              <AiOutlineSearch size={25} />
            </button>
          </div>
         
          <div>
            <Link href="/favorite" onClick={() => changeStatus()}>
              <AiOutlineHeart size={30} />
            </Link>
          </div>
        </div>
      </div>

      {estado && (
        <div className={styles.busqueda}>
          <Search products={finds} />
        </div>
      )}
    </>
  );
}
