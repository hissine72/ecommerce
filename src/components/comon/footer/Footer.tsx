import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
    <section className=" mt-[200px]  ">
      <div className=" container border-2 mx-auto bg-[#e5e5e5] rounded-xl ">
      <div className=" content flex justify-center justify-between   py-[60px]">
        <div className="  ml-[50px]">
          <div>
            <h1 className=" text-xl font-bold font-serif">You've just found your last</h1>
            <h1 className="  text-xl font-bold font-serif">packaging partner</h1>
          </div>
          <div>
            <img src="jl;'" />
            <img src="klk/.l" />
            <img src="km./l" />
          </div>
          <div>
            <p className=" mt-[20px]">Your brand deserves a credit for doing the right thing! Share the good news <br/> and join our eco-alliance.</p>
            <Link className=" mt-[30px] space-y-8 underline-offset-4 " to={""}>Add ourbadge your site!</Link>
          </div>
    
        </div>
        <div className="  flex justify-between w-[40%]">
          <div>
            <h1 className=" text-xl mb-[10px] font-bold">Sustainability</h1>
            <ul>
              <li>Eco badge</li>
              <li> Eco proprties</li>
              <li> FSc certifications</li>
              <li>Plating trees</li>
            </ul>
            <h1 className=" text-xl mb-[10px] font-bold mt-[10px]"> Design</h1>
            <ul>
              <li>Packing tampletes</li>
              <li> inspiring stories</li>
            </ul>
          </div>
          <div>
          <h1  className=" text-xl mb-[10px] font-bold">company</h1>
            <ul>
              <li>Eco badge</li>
              <li> Eco proprties</li>
              <li> FSc certifications</li>
              <li>Plating trees</li>
              <li>Eco badge</li>
              <li> Eco proprties</li>
              <li> FSc certifications</li>
              <li>Plating trees</li>
            </ul>
          </div>
          <div>
          <h1 className=" text-xl mb-[10px] font-bold">Resources</h1>
            <ul>
              <li>Eco badge</li>
              <li> Eco proprties</li>
              
            </ul>
            <h1 className=" text-xl mt-[30px] mb-[10px] font-bold"> Contact</h1>
            <ul>
              <li>Packing tampletes</li>
              <li> inspiring stories</li>
            </ul>
          </div>
       
        </div>
        


        
      </div>
      <div className=" border-b-2 border-gray-300 w-[95%] mx-auto"></div>
      <div className= " flex justify-between ml-[80px] mt-[40px] mb-[40px]">
        <p>Copyright Packhelp 2024 · We use recycled cardboard</p>
        <div className=" mr-[50px]">
          social

        </div>
      </div>


      </div>
  
    </section>
   
    </>
  )
}

export default Footer