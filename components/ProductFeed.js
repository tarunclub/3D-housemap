import { useEffect, useState } from "react";
import Product from "./Product";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

function ProductFeed() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "products"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setproducts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28 mx-auto">
      {products?.slice(0, 4).map((product) => (
        <Link href={`products/${product.id}`}>
          <a>
            <Product
              key={product.data().id}
              id={product.data().id}
              title={product.data().title}
              price={product.data().price}
              description={product.data().description}
              category={product.data().category}
              image={product.data().image}
            />
          </a>
        </Link>
      ))}

      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />

      <div className="md:col-span-2">
        {products?.slice(4, 5).map((product) => (
          <Link href={`products/${product.id}`}>
            <a>
              <Product
                key={product.data().id}
                id={product.data().id}
                title={product.data().title}
                price={product.data().price}
                description={product.data().description}
                category={product.data().category}
                image={product.data().image}
              />
            </a>
          </Link>
        ))}
      </div>

      {products?.slice(5, 7).map((product) => (
        <Link href={`products/${product.id}`}>
          <a>
            <Product
              key={product.data().id}
              id={product.data().id}
              title={product.data().title}
              price={product.data().price}
              description={product.data().description}
              category={product.data().category}
              image={product.data().image}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default ProductFeed;
