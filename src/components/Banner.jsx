

function Banner(props){
    return(
        <>
       <div className=" p-22  md:p-25 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600" >
        <h1 className="text-3xl md:text-4xl font-bold">{props.title} </h1>
        <p className="mt-4 text-xl">{props.desc} </p>
       </div>
        </>
    )
}

export default Banner;