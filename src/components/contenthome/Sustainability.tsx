import CardSustainability from "../comon/cards/CardSustainability"


const Sustainability = () => {
  return (
    <div className="mt-[200px]">
    <h1 className="font-bold font-sans mx-auto relative top-9 text-2xl md:text-4xl leading-[40px] md:leading-[80px] w-full md:w-[810px] text-center px-4">
      Sustainability. Be part of the solution
    </h1>
    <div className="container mx-auto gap-5 flex flex-wrap justify-center">
      <CardSustainability
        titel="Reforestation"
        description="Communicate the properties of your branded packaging with simplified eco labels."
        image="https://ph-prod.imgix.net/wp-content/uploads/2024/04/09221126/Photo-Frame-4.png?auto=format&amp;ixlib=react-9.7.0"
      />
      <CardSustainability
        titel="Reforestation"
        description="Know your packaging materials and where they came from thanks to our vetted supplier network."
        image="https://ph-prod.imgix.net/wp-content/uploads/2024/04/17091024/Responsible-Sourcing-3.png?auto=format&amp;ixlib=react-9.7.0"
      />
      <CardSustainability
        titel="Reforestation"
        description="Get a clear and accurate idea of your packaging's carbon footprint throughout its lifecycle.."
        image="https://ph-prod.imgix.net/wp-content/uploads/2024/04/09221206/Photo-Frame-5.png?auto=format&amp;ixlib=react-9.7.0"
      />
      <CardSustainability
        titel="Reforestation"
        description="Order packaging from Packhelp and support reforestation - so far we've replanted 35,000 trees through our partnership with One Tree Planted"
        image="https://ph-prod.imgix.net/wp-content/uploads/2024/04/17091017/Reforestation-2.png?auto=format&amp;ixlib=react-9.7.0"
      />
    </div>
  </div>
  
  )
}

export default Sustainability

