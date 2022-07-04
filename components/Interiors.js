import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import Product from './Product';

function Interiors() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, 'products'),
        orderBy('timestamp', 'desc'),
        where('category', '==', 'Interior')
      ),
      (snapshot) => {
        setproducts(snapshot.docs);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);
  return (
    <div className="grid grid-flow-row-dense md:grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 mx-auto overflow-x-scroll">
      <div className="flex flex-col">
        {products?.map((post) => (
          <Product
            key={post.data().id}
            id={post.data().id}
            title={post.data().title}
            price={post.data().price}
            description={post.data().description}
            category={post.data().category}
            image={post.data().image}
          />
        ))}
        <div>
          <button className="button">View All</button>
        </div>
      </div>
    </div>
  );
}

export default Interiors;
