import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";

function ProductDetails({ result }) {
  console.log(products);
  return <div>Hello</div>;
}

export async function getServerSideProps({ params }) {
  const docRef = await doc(db, "products", params);
  const product = await getDocs(docRef);

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
