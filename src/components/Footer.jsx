
function Footer(){
    return(
        <>
        <footer className="bg-teal-800/80 p-20 text-white">
            {/* parent div  */}
            <div className="text-center gap-4 grid md:grid-cols-4">
                <div>
                    <h1 className="text-2xl font-bold mb-2">🚀 About TechHub </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquam nostrum perferendis, fugit quidem provident eos eligendi </p>
                </div>
                 <div>
                    <h1 className="text-2xl font-bold mb-2">Quick Links </h1>
                    <ol>
                        <li>Home</li>
                         <li>Products</li>
                          <li>About Us</li>
                           <li>Contact</li>
                    </ol>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">Services </h1>
                    <ol>
                        <li>Fast Shipping</li>
                         <li>Warranty</li>
                          <li>Best Prices</li>
                           <li>Quality Guaranteed</li>
                    </ol>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">Contact Info </h1>
                    <ol>
                        <li>Info@MuzaffarHoldings.com</li>
                         <li>+92 321 9456250</li>
                          <li>Lahore, Pakistan</li>
                           <li>Mon-Fri, 9AM-5PM</li>
                    </ol>
                </div>

            </div> 
            <div>
                
            </div>
        </footer>
        </>
    )

}

export default Footer;