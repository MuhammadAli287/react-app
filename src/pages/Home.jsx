//import Card from "../components/card";
import Footer from "../components/Footer";
//import { products } from "../data/products";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <section>
                    <div className="text-center p-10  h-screen bg-gradient-to-t from-black to-teal-700">
                        <h1 className="text-white mt-25 text-5xl font-bold font-serif animate-pulse">Techno🎮</h1>
                        <h1 className="text-4xl mt-15 md:text-5xl font-bold font-serif text-white">Welcome To TechHub Store 🚀</h1>
                        <p className="text-white text-xl mt-4 font-serif">Discover  amazing tech Product at unbeatable prices. We bring you the latest gaddets<br /> and accessories from top brands. </p>
                        <div className="mt-6 flex justify-center gap-6">
                            <button className="text-blue-600 font-bold bg-white p-3 md:p-4 rounded-lg ">🛒 Shop Now</button>
                            <button className="font-bold text-white  p-3 md:p-4 bg-black  hover:bg-black/10">🔗 Learn More</button>
                        </div>
                    </div>
                </section>

                <section >
                    <div className="p-8 mt-12 text-center ">
                        <h1 className="text-4xl font-bold">✨ Featured Products</h1>
                        <p className="mt-4 text-gray-700">Check out our best-selling products selected just for you</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-4">
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4Hn-i-k-e-c74qS_-qTLuxEpuDF5mLpNhlRsAAqDCg&s=10" width={400} className="rounded-2xl"></img>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllP26Ba7AvBr3GAtoI_bvAxY95ef7J8P74CGQXfnZNw&s=10" width={400} className="rounded-2xl"></img>
                        </div >
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJt6nXwDwXoBfiCNze8SAQWcoEBttURpm3CKVBOcVNA&s=10" width={400} className="rounded-2xl"></img>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFcrQ2YRoEU7LJzjhyHs4eyj9CHSz6-SNOYdtDCmWZg&s=10" width={400} className="rounded-2xl"></img>
                        </div>
                    </div>


                    <div className="text-center">
                        <Link
                            to="/products"
                            className="inline-block bg-teal-900 px-6 py-3 m-6 font-semibold text-xl text-white animate-pulse"
                        >
                            View All Products ➡
                        </Link>
                    </div>





                    {/* <div className="grid grid-cols-1 m-4 gap-6 md:gap-4 md:grid-cols-4 ">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div> */}

                </section>

                <section className="mt-20  bg-teal-900/10">
                    <h1 className="text-3xl  font-bold text-center p-12">Why Choose TechHub ?</h1>
                    <div className=" grid  md:grid-cols-4 gap-4 p-6 mb-30">
                        <div className="bg-white p-10 text-center rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
                            <h1 className="text-2xl">🎇 </h1>
                            <h1 className="text-2xl font-bold">Fast Shipping</h1>
                            <p className="mt-3">Get your products delivered within 2-3 business days</p>
                        </div>
                        <div className="bg-white  p-10 text-center rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
                            <h1 className="text-2xl">💶💲</h1>
                            <h1 className="text-2xl font-bold">Best Prices</h1>
                            <p className="mt-3">Competitive pricing with regular deals and discounts</p>
                        </div>
                        <div className="bg-white  p-10 text-center rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
                            <h1 className="text-2xl">💯✅ </h1>
                            <h1 className="text-2xl font-bold">Quality Assured</h1>
                            <p className="mt-3">100% authentic products with 1-years warranty</p>
                        </div>
                        <div className="bg-white  p-10 text-center rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
                            <h1 className="text-2xl">🔂</h1>
                            <h1 className="text-2xl font-bold">24/7 Support</h1>
                            <p className="mt-3">Dedicated customer support available and the </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 p-14 md:justify-around text-white bg-gradient-to-r from-teal-700 to-teal-500">
                        <span>
                            <h1 className="text-4xl text-center font-bold ">10k+</h1>
                            <p>Happy Customers</p>
                        </span>
                        <span>
                            <h1 className="text-4xl text-center font-bold ">500+</h1>
                            <p>Products Available</p>
                        </span>
                        <span>
                            <h1 className="text-4xl text-center font-bold ">98%</h1>
                            <p>Customer's Satisfaction</p>
                        </span>

                    </div>
                </section>
                {/* form section  */}
                {/* <section className="bg-gray-200/80 p-4 md:p-30 flex justify-center items-center   ">
                    <div className="flex shadow-xl flex-col justfiy-center items-center gap-4  bg-white text-center rounded-lg  p-8 transition-200 hover:-translate-y-2 hover:shadow-2xl ">
                        <h1 className="text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h1>
                        <p className="text-gray-600">Get exclusive deals, new products launches, and tech tips delivered to your inbox</p>
                        <div className="mt-4 flex items-center gap-4">
                            <input className="border-1 border-gray-400 px-6 py-2 rounded-lg" type="text" placeholder="Enter Your Email Address"></input>
                            <button className="p-2.5 font-semibold text-white bg-blue-700 rounded-lg ">Subscribe</button>
                        </div>
                    </div>


                </section> */}

                <section className="bg-gray-200/80 px-4 py-10 md:p-16 flex justify-center items-center">
  <div className="w-full max-w-xl flex flex-col justify-center items-center gap-4 bg-white text-center rounded-lg p-6 md:p-8 shadow-xl transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
    <h1 className="text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h1>
    <p className="text-gray-600 text-sm md:text-base">
      Get exclusive deals, new product launches, and tech tips delivered to your inbox
    </p>

    <div className="mt-4 w-full flex flex-col sm:flex-row items-stretch gap-3">
      <input
        className="w-full flex-1 min-w-0 border border-gray-400 px-4 py-2 rounded-lg"
        type="email"
        placeholder="Enter Your Email Address"
      />
      <button className="px-5 py-2.5 font-semibold text-white bg-blue-700 rounded-lg">
        Subscribe
      </button>
    </div>
  </div>
</section>

                {/* upgrade section  */}
                <section>
                    <div className="text-center text-white p-20 bg-gradient-to-l from-slate-950 to-teal-700">
                        <h1 className="text-3xl font-bold">Ready to Upgrade Your Tech?</h1>
                        <p className="mt-4 mb-10">Browser our complete collection of cutting edge products</p>
                        <Link to="/products" className="px-4 py-2 animate-pulse font-semibold bg-white text-pink-700 rounded-lg  mt-10">Start Shopping Now ➡</Link>

                    </div>
                </section>

            </main>

            <Footer />

        </>
    )
}

export default Home;