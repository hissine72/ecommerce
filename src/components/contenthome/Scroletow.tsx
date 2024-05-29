import React from 'react'

const Scroletow = () => {
  return (
    <div className="overflow-hidden w-[800px] h-[800px] relative border-3 border-red-700 ">
        <div className="absolute inset-0 flex flex-col">
          <div className="  mb-[10px]">
          <img className="scroll-vertical rounded-md max-w-full" 
                 src="https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090335/fillers.png?auto=format&ixlib=react-9.7.0&w=512"  ></img>
          </div>
           
           <div>
           <img className="scroll-vertical rounded-md max-w-full mb-[10px]" 
                 src='https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090022/accessories.png?auto=format&ixlib=react-9.7.0&w=512'  ></img>

           </div>
            <div>
            <img className="scroll-vertical rounded-md max-w-full" 
                 src='https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090119/bags.png?auto=format&ixlib=react-9.7.0&w=512'  ></img>

            </div>
           
        
          
        
       
        
       
          
        
        </div>
        
       
      </div>
  )
}

export default Scroletow