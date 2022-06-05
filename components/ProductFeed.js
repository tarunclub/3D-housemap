import { useEffect, useState } from "react";
import Product from "./Product";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";

function ProductFeed({ products }) {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28 mx-auto">
      {posts?.slice(0, 4).map((post) => (
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

      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />

      <div className="md:col-span-2">
        {posts?.slice(4, 5).map((post) => (
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
      </div>

      {posts?.slice(5, products.length).map((post) => (
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
    </div>
  );
}

export default ProductFeed;
