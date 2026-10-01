import Banner from "../components/Banner";
import Footer from "../components/Footer";


function About(){
    return(
        <>
        <main>
            <Banner title='About TechHub Store' desc='Your trusted partner in the world of Modern technology' />
             
              {/* story section   */}
            <section>
              <div className="text-center mt-16 p-6">
                <h1 className="text-5xl font-serif font-bold mb-2">Our Story </h1>
                <p className="md:text-xl font-serif text-gray-700 p-6 ">
                   

Welcome to our online product store, where quality, convenience, and customer satisfaction come first. Our goal is to provide customers with a simple and enjoyable shopping experience by offering a wide range of carefully selected products in one place. We believe that online shopping should be easy, reliable, and accessible to everyone.

We focus on providing products that offer good quality, useful features, and value for money. From everyday essentials to modern and stylish products, our collection is designed to meet different customer needs and preferences. We regularly improve and update our products so that our customers can discover new and useful items.

Customer satisfaction is one of our biggest priorities. We aim to make every step of the shopping journey smooth, from browsing products and checking details to placing an order. We also believe in building trust with our customers through clear product information, reliable service, and a user-friendly website.

Our vision is to create a trusted online shopping platform where customers can find the products they need without unnecessary difficulty. As we continue to grow, we are committed to improving our services, expanding our collection, and creating a better shopping experience for everyone.

Thank you for visiting our website and choosing us for your shopping needs. We appreciate your trust and look forward to providing you with quality products and a great online shopping experience.

                </p>
              </div>

              <div className=" m-6 grid grid-cols-1 gap-2 md:grid-cols-4">
                <div className="p-4 text-center bg-blue-400/20 rounded-lg ">
                    <h1 className="text-3xl font-bold text-blue-600">2020</h1>
                    <p className="text-gray-600">Company Founded</p>
                </div>
                <div className="p-4  text-center bg-pink-400/20 rounded-lg">
                    <h1 className="text-3xl font-bold text-pink-600">2021</h1>
                    <p className="text-gray-600">1000 Customers</p>
                </div>
                <div className="p-4  text-center bg-green-400/20 rounded-lg">
                    <h1 className="text-3xl font-bold text-green-600">2022</h1>
                    <p className="text-gray-600">Company Founded</p>
                </div>
                <div className="p-4  text-center bg-purple-400/20 rounded-lg">
                    <h1 className="text-3xl font-bold text-purple-600">2024</h1>
                    <p className="text-gray-600">Company Founded</p>
                </div>
              </div>
            </section>
            
            {/* our values  */}
            <section className="mt-10 p-15 md:p-30 bg-gray-200/70">
                <h1 className="text-4xl m-6 text-center font-bold">Our Values</h1>
                <div className=" grid gap-4 md:grid-cols-4">
                    <div className="p-6 bg-white rounded-lg text-center">
                        <h1 className="text-3xl">☣</h1>
                        <h1 className="text-2xl font-bold">Integrity</h1>
                        <p className="text-gray-600">We believe in honest business practices and transparency</p>
                    </div>
                     <div className="p-6 bg-white rounded-lg text-center">
                        <h1 className="text-3xl">⭐</h1>
                        <h1 className="text-2xl font-bold">Excellent</h1>
                        <p className="text-gray-600">We believe in honest business practices and transparency</p>
                    </div>
                     <div className="p-6 bg-white rounded-lg text-center">
                        <h1 className="text-3xl">💡</h1>
                        <h1 className="text-2xl font-bold">Innovation</h1>
                        <p className="text-gray-600">We believe in honest business practices and transparency</p>
                    </div>
                     <div className="p-6 bg-white rounded-lg text-center">
                        <h1 className="text-3xl">🌍</h1>
                        <h1 className="text-2xl font-bold">Community</h1>
                        <p className="text-gray-600">We believe in honest business practices and transparency</p>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </>
    )
}

export default About;