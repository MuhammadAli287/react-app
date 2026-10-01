import Banner from "../components/Banner";
import Footer from "../components/Footer";


function Contact(){
    return(
 <>
 
<Banner title='Contact Us' desc='We love here from you. fell free to reach out to us with any questions, suggestions, or feedback. We Appreciate your concern and work on them ' />

    <div className="p-6 grid gap-4 md:grid-cols-4">
        <div className="bg-teal-700/50 p-4 rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
            <h1 className="text-2xl">📩</h1>
            <h2 className="text-2xl font-bold">Email Us</h2>
            <p className="mt-2 text-gray-800">Techhub@gmail.com</p>
            <p className="mt-1 text-gray-800">We reply within 24 hours</p>
        </div>
        <div className="bg-teal-700/50 p-4 rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
            <h1 className="text-2xl">📞</h1>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-gray-800">+92 321 9456250</p>
            <p className="mt-1 text-gray-800">We reply within 24 hours Mon - Fri 9am - 6pm</p>
        </div>
         <div className="bg-teal-700/50 p-4 rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
            <h1 className="text-2xl">📍</h1>
            <h2 className="text-2xl font-bold">Our Address</h2>
            <p className="mt-2 text-gray-800">Lahore, Pakistan</p>
            <p className="mt-1 text-gray-800">Visit us at our office location</p>
        </div>
         <div className="bg-teal-700/50 p-4 rounded-lg hover:-translate-y-1 hover:shadow-2xl ">
            <h1 className="text-2xl">🕰️</h1>
            <h2 className="text-2xl font-bold">Business Hours</h2>
            <p className="mt-2 text-gray-800">Mon - Fri 9:00 am - 6:00 pm</p>
            <p className="mt-1 text-gray-800">Visit us at our office location. We are closed on sat - sun</p>
        </div>
    </div>

    <div className="text-center mt-15">
        <h1 className="text-3xl font-bold font-serif">
            Why Contact Us?
        </h1>
        <p className=" p-6 md:text-xl font-serif ">
          Have a question about a product, an order, or our services? We are always here to help. Whether you need more information about a product, want to check your order, have a problem with your purchase, or simply want to share your feedback, feel free to contact us. Our support team is committed to providing quick and helpful assistance and making your shopping experience as smooth and convenient as possible.    </p>
    </div>

    <div className="text-center mt-15">
        <h1 className="text-3xl font-bold font-serif text-teal-900">
            Customer Support 
        </h1>
        <p className=" p-6 md:text-xl font-serif ">
          Our dedicated support team is always ready to assist you with your questions, orders, and concerns. We aim to provide friendly, quick, and helpful service whenever you need us.   
    Our dedicated support team is always ready to assist you with your questions, orders, and concerns. We aim to provide friendly, quick, and helpful service whenever you need us.</p>
    </div>
<div className="bg-gray-200/50 p-6">
    <div className="text-center mt-15">
        <h1 className="text-3xl font-bold font-serif">
           We Value Your Feedback?
        </h1>
        <p className=" p-6 md:text-xl font-serif ">
         Your feedback helps us improve. We welcome your suggestions, comments, and ideas so we can continue improving our products 
         and services to provide a better shopping experience. Have a question about a product, an order, or our services? We are always here to help. Whether you need more information about a product, want to check your order, have a problem with your purchase, or simply want to share your feedback, feel free to contact us. Our support team is committed to providing quick and helpful assistance and making your shopping experience as smooth and convenient as possible.    </p>
    </div>
    <div className="flex items-center justify-center gap-4 mb-30">
        <textarea className="border-2 rounded-lg  px-6" placeholder="Enter Your feedback...."  ></textarea>
        <button className="px-8 py-3 bg-teal-800 hover:bg-teal-700 font-semibold text-white rounded-lg">Submit</button>
    </div>
    </div>


    <Footer />
 
 </>
    )
}

export default Contact;