import React from "react";
import Image from "next/image";
import items from "./ProductRecord.json";
import styles from "./product.module.scss";
import stylesMap from "./ProductItems.module.scss";

const Product = () => {
  return (
    <div className=" mx-auto w-[80vw] my-20 flex flex-col gap-20">
      <div className="flex flex-col items-center text-center">
        <div className={styles.wrapper}>
          <div className={styles.statictxt}>Meet our new limited</div>
          <ul className={styles.dynamictxts}>
            <li>
              <span>Collection</span>
            </li>
            <li>
              <span>Technology</span>
            </li>
            <li>
              <span>Product</span>
            </li>
            <li>
              <span>Softwares</span>
            </li>
          </ul>
        </div>
        <h4>Availabile Now</h4>
      </div>

      <div className={styles.mainBody}>
        {items.map((item) => (
          // <ProductItems
          //   price={item.price}
          //   productTitle={item.title}
          //   image={item.src}
          //   alt={item.alt}
          //   id={item.id}
          // />
          <div className={` ${stylesMap.mainMapBody}`} key={item.id}>
            <div>
              <span className="text-yellow-400 text-sm">New</span>
              <div>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <span className="text-sm text-slate-400">
                  Welcome to spatial computing
                </span>
              </div>
            </div>

            <div className={stylesMap.imageDiv}>
              <Image
                className={stylesMap.images}
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
              />
            </div>
            <div className=" flex items-center justify-between">
              <span className="text-sm text-slate-400">From ${item.price}</span>
              <button className={stylesMap.buyButton}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
