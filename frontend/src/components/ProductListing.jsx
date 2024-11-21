import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Section from "../components/Section"


export default function ProductListing (props) {
    
    let [products, setProducts] = useState([]);

    useEffect(function() {
       fetch("http://localhost:3000/products")
       .then(response => response.json())
       .then(body => {
            let productsResponse = body.sort(function (current, next) {
                return current.price - next.price
            });
            if(props.orderBy === 'maior') {
                productsResponse = productsResponse.reverse();
            }
            setProducts(productsResponse);
            console.log(productsResponse);
            
       });
    }, [props.orderBy]);

    return (
        <Section>
            <div className="flex gap-[24px] justify-center flex-wrap mt-3 mb-3">
                {products.map(product => {
                    let image = product.images[0]?.url ?? product.placeholder_image
                    return <ProductCard 
                    image={image}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.price_with_discount}
                    slug={product.slug} />
                })}
            </div>
        </Section>
    );
}