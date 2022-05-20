import { FilterIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

function Search({ products }) {
  return (
    <div>
      <Header />
      <main className="flex p-3 font-Poppins">
        {/* Left Section */}
        <section className="flex flex-row px-3">
          <form>
            <div className="flex items-center space-x-3">
              <FilterIcon className="h-6 hover:animate-bounce" />
              <p className="text-lg">Filter</p>
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
              <input
                type="Number"
                placeholder="Min plot area(sqft)"
                className="input"
              />
              <input
                type="Number"
                placeholder="Max plor area(sqft)"
                className="input"
              />

              <p className="">Or</p>

              <input type="Number" placeholder="Width(ft)" className="input" />
              <input type="Number" placeholder="Length(ft)" className="input" />
            </div>

            <button className="button mt-5">Search</button>
          </form>
        </section>

        {/* Right Section */}
        <section className="flex-grow mt-28">
          <ProductFeed products={products} />
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
