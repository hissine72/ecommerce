const Dp = () => {
  return (
    <>
    <div className=" flex justify-center gap-2 columns-2 place-items-center mt-[30px]">
    <div className="flex justify-center flex-col w-[550px] border-2 rounded-[5px] bg-[#e5e5e5] h-[300px]  ">
      <div className=" w-[350px] mx-auto  ">
        <h1 className=" text-center font-sans font-bold ">3D packaging editor</h1>
        <p className=" text-center ">
        Design and preview your custom packaging in
          <br /> a matter of minutes
        </p>
      </div>
      <div className="w-[520px] mx-auto mt-8">
      <img decoding="async" loading="lazy" sizes="
              (min-width: 1450px) 600px,
              (min-width: 1100px) 90vw,
              90vw
            " src="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0" srcSet="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=100 100w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=116 116w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=135 135w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=156 156w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=181 181w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=210 210w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=244 244w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=283 283w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=328 328w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=380 380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=441 441w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=512 512w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=594 594w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=689 689w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=799 799w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=927 927w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1075 1075w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1247 1247w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1446 1446w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1678 1678w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1946 1946w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2257 2257w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2619 2619w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3038 3038w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3524 3524w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4087 4087w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4741 4741w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=5500 5500w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=6380 6380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=7401 7401w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170436/3d-editor-packaging.png?auto=format&amp;ixlib=react-9.7.0&amp;w=8192 8192w"/>

      </div>
      
    </div>
    <div className="flex justify-center flex-col w-[550px] border-2 rounded-[5px] bg-[#e5e5e5] h-[300px]  ">
      <div className=" w-[350px] mx-auto  ">
        <h1 className=" text-center font-sans font-bold ">Design templates</h1>
        <p className=" text-center">
        Choose from our selection of design templates,
          <br /> to kickstart your project - no need to work from scratch
        </p>
      </div>
      <div className="w-[520px] mx-auto">
      <img decoding="async" loading="lazy" sizes="
              (min-width: 1450px) 600px,
              (min-width: 1100px) 90vw,
              90vw
            " src="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0" srcSet="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=100 100w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=116 116w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=135 135w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=156 156w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=181 181w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=210 210w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=244 244w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=283 283w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=328 328w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=380 380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=441 441w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=512 512w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=594 594w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=689 689w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=799 799w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=927 927w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1075 1075w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1247 1247w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1446 1446w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1678 1678w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1946 1946w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2257 2257w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2619 2619w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3038 3038w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3524 3524w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4087 4087w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4741 4741w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=5500 5500w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=6380 6380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=7401 7401w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170454/design-templates.png?auto=format&amp;ixlib=react-9.7.0&amp;w=8192 8192w"/>
      </div>
      
    </div>
    
    
    
    
    </div>
    <div className=" flex justify-center gap-2 mt-2 ">
    <div className="flex justify-center flex-col w-[550px] rounded-[5px] border-2 bg-[#e5e5e5] h-[300px]  ">
      <div className=" w-[350px] mx-auto  ">
        <h1 className=" text-center font-sans font-bold ">Expert check</h1>
        <p className=" text-center">
        Make sure the final print is flawless - our,
          <br /> packaging experts check your every design
        </p>
      </div>
      <div className="w-[520px] mx-auto">
      <img decoding="async" loading="lazy" sizes="
              (min-width: 1450px) 600px,
              (min-width: 1100px) 90vw,
              90vw
            " src="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0" srcSet="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=100 100w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=116 116w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=135 135w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=156 156w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=181 181w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=210 210w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=244 244w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=283 283w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=328 328w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=380 380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=441 441w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=512 512w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=594 594w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=689 689w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=799 799w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=927 927w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1075 1075w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1247 1247w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1446 1446w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1678 1678w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1946 1946w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2257 2257w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2619 2619w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3038 3038w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3524 3524w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4087 4087w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4741 4741w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=5500 5500w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=6380 6380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=7401 7401w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170506/expert-check.png?auto=format&amp;ixlib=react-9.7.0&amp;w=8192 8192w"/>
      </div>
      
    </div>
    <div className="flex justify-center flex-col w-[550px] border-2 rounded-[5px] bg-[#e5e5e5] h-[300px]  ">
      <div className=" w-[350px] mx-auto  ">
        <h1 className=" text-center font-sans font-bold ">Tools for graphic pros</h1>
        <p className=" text-center">
        Upload and manage your artwork without a
          <br />hassle. Our design editor supports .AI and .PDF files
        </p>
      </div>
      <div className="w-[520px] mx-auto">
      <img decoding="async" loading="lazy" sizes="
              (min-width: 1450px) 600px,
              (min-width: 1100px) 90vw,
              90vw
            " src="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0" srcSet="https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=100 100w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=116 116w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=135 135w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=156 156w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=181 181w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=210 210w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=244 244w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=283 283w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=328 328w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=380 380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=441 441w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=512 512w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=594 594w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=689 689w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=799 799w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=927 927w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1075 1075w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1247 1247w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1446 1446w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1678 1678w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=1946 1946w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2257 2257w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=2619 2619w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3038 3038w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=3524 3524w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4087 4087w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=4741 4741w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=5500 5500w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=6380 6380w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=7401 7401w,
https://ph-prod.imgix.net/wp-content/uploads/2024/04/16170519/working-as-a-pro.png?auto=format&amp;ixlib=react-9.7.0&amp;w=8192 8192w"/>
      </div>
      
    </div>
   
      
    </div>
   </>
  );
};

export default Dp;
