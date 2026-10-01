import { Link } from "react-router-dom";


function Navbar(){
    return(
      <div className="fixed w-full flex m-2 rounded-lg text-white justify-between items-center p-4  bg-gradient-to-r from-teal-600 to-gray-900">
        <div className="text-3xl font-bold">TechHub Store</div>
        <nav className="hidden md:flex gap-4 font-bold">
        <Link to='/' >Home</Link>
         <Link to='/products' >Products</Link>
          <Link to='/about' >About</Link>
           <Link to='/contact' >Contact</Link>
           </nav>
           <button className="bg-black px-4 py-3 font-semibold text-white   ">Get Started</button>
      </div>
    )
}

export default Navbar; 