import ProductListing from "../components/ProductListing.jsx";

function ProductCheckBox() {
    return (
        <>
        <div>
            <div className="flex justify-between my-[30px]">
                <span className="self-center text-[18.7px]">
                    <b>Resultados para Tênis - </b>
                    </span>
                <select className="flex text-dark_gray_2 text-[16px] bg-light_gray_3 border-solid border-2 rounded-[4px] border-black  w-[300px] h-[40px]" name="" id="">
                    <option value="lower-price">Ordenar por: Menor preço</option>
                    <option value="higher-price">Ordenar por: Maior preço</option>
                </select>
            </div>
        <ProductListing />
        </div>
        </>
    )
}

export default ProductCheckBox;