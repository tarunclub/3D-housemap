import { FilterIcon } from '@heroicons/react/solid';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useSession } from 'next-auth/react';
import MyModal from '../components/Modal';
import Image from 'next/image';

function Search({ products }) {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  return (
    <div>
      <Header />
      <MyModal />
      <main className="flex p-3 font-Poppins">
        {/* Left Section */}
        <section className="flex flex-row px-3 text-sm text-gray-700">
          <form>
            <div className="flex items-center space-x-3">
              <FilterIcon className="h-6 hover:animate-bounce text-blue-600" />
              <p className="text-lg font-bold">Filter</p>
            </div>
            <p className="mt-5">Floors</p>
            <input type="number" className="input" />

            <p className="mt-5">Direction</p>
            <div className="">
              <select name="directions" id="" className="input">
                <option value="">North</option>
                <option value="">South</option>
                <option value="">East</option>
                <option value="">West</option>
                <option value="">North East</option>
                <option value="">South East</option>
                <option value="">North West</option>
                <option value="">South West</option>
              </select>
            </div>

            <p className="mt-5">Dimensions</p>
            <div className="space-y-5">
              <input type="Number" placeholder="Min plot area(sqft)" className="input" />
              <input type="Number" placeholder="Max plor area(sqft)" className="input" />

              <p className="">Or</p>

              <input type="Number" placeholder="Width(ft)" className="input" />
              <input type="Number" placeholder="Length(ft)" className="input" />
            </div>

            <button className="button mt-5">Search</button>
          </form>
        </section>

        {/* Right Section */}
        <section className="flex-grow mt-28">
          <div className="grid grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-3 md:-mt-28 mx-auto">
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

            <Image
              layout="fill"
              alt="avatar"
              className="md:col-span-full"
              src="https://links.papareact.com/dyz"
            />

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
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

  return {
    props: {
      products
    }
  };
}
