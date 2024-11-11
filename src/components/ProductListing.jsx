import ProductCard from "./ProductCard"
function ProductListing (){
return(
<>
<div className="container flex justify-evenly flex-wrap"> 
    <div className="inner-container">
        <div className="cards flex justify-evenly" >
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
        </div>
        <div className="cards flex justify-evenly gap-[24px]">
        <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
</div>
</>
)}
 export default ProductListing 


