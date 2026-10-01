import Card from "../components/card";
import Footer from "../components/Footer";
import { products } from "../data/products";

function Products(){
    return(
        <>
        <section >
            <div className="pt-30 bg-gray-200/50">
                <h1 className="text-center text-4xl md:text-5xl font-semibold font-serif m-6">Products</h1>
         <div className="grid grid-cols-1 m-8 gap-6 md:gap-4 md:grid-cols-4 mt-12 ">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      </div>
      </section>

      <Footer />

    
        </>
    )
}

export default Products;
