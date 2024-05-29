interface Iprops {
    titel:string;
    image:string;
    description:string;
}

const CardSustainability = ({titel,image,description}:Iprops ) => {
  return (
    <section className=" mt-[100px]">
        <div className=" container mx-auto  ">
            <div className="  ">
            <div className="bg-white   ">
                <div className=" w-[350px] " > <img src={image} className= " rounded-[10px] max-w-full mb-4"/>
                </div>
                <div className="">
                    <h2 className="text-xl font-semibold mb-2">{titel}</h2>
                    <p className="text-gray-600  w-[350px]">{description}</p>
                </div>
            </div>
            </div>
            
        </div>
    </section>
    
  )
}

export default CardSustainability