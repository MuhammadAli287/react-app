import Banner from "../components/Banner";
import Footer from "../components/Footer";


function About(){
    return(
        <>
        <main>
            <Banner title='About TechHub Store' desc='Your trusted partner in the world of technology' />
             
              {/* story section   */}
            <section>
              <div className="text-center mt-16 p-6">
                <h1 className="text-4xl font-bold mb-8">Our Story </h1>
                <p className="text-1xl text-gray-700">Lorem ipsum dolor sit amet ,ssndbjkdsahj shdo kjDHO KJDho JFSHO EJH  consectetur adipisicing elit. Vel, reprehenderit? Cupiditate itaque atque illo rem praesentium natus iure explicabo? Fuga, noem  natus iure explicabo? Fuga,n dignissimos. Maiores quis sint quasi pariatur doloremque, saepe repudiandae!</p>
                <br />
                <p className="text-1xl text-gray-700">Lorem ipsum dolor sit amet consecteturN herh jdho jqeh jqefhieh gojg  adipisicing elit. Vel, reprehenderit? Cupiditate itaque atque illo rem praesentium natus iure explicabo? Fuga,em pracabo? Fuga, non dignissimos. Maiores quis sint quasi pariatur doloremque, saepe repudiandae!</p>
                   <br />
                 <p className="text-1xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, reprehenderit?  dolor sit amet consecteturN herh jdho jqeh jqefhieh gojg  adipisicing elit. Vel, reprehenderit? Cupiditate itaque atque illo rem praesentium natus iure explicabo? Fuga, non dignissimos. Maiores quis sint quasi pariatur doloremque, saepe repudiandae!</p>
          
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