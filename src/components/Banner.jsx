

function Banner(props){
    return(
        <>
       <div className=" p-22 md:p-25 text-center text-white bg-gradient-to-b from-teal-600/50 to-slate-800" >
        <h1 className="mt-20 text-3xl md:text-4xl font-bold">{props.title} </h1>
        <p className="mt-4 mb-20 text-xl">{props.desc} </p>
       </div>
        </>
    )
}

export default Banner;