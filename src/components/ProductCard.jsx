import Tenis from "../assets/images/tenis.svg"
function ProductCard() {
    return (
        <div className="card">
            <div className="card-product">
                <div className="card-product-text">30% OFF</div>
                <img  src={Tenis} a="#" />
            </div>
            <div className="card-footer">
                <div className="product">Tênis</div>
                <div className="description">K-Swiss V8 - Masculino</div>
                <div className="prices">
                    <span className="full-price">$200</span>
                    <span className="discount-price">$100</span>
                </div>
            </div>
        </div>
    )
}
export default ProductCard