import ProductListing from "../components/ProductListing.jsx";

import { useState } from "react";

export default function ProductCheckBox() {

    const [orderBy, setOrderBy] = useState('maior');

    return (
        <>
        <div>
            <div className="flex justify-between my-[30px]">
                <span className="self-center text-[18.7px]">
                    <b>Resultados para Tênis - </b>
                    </span>
                <form>
                <select className="flex text-dark_gray_2 text-[16px] bg-light_gray_3 border-solid border-2 rounded-[4px] border-black  w-[300px] h-[40px]" value={orderBy} onChange={event => setOrderBy(event.target.value)}>
                    <option value="menor">Ordenar por: Menor preço</option>
                    <option value="maior">Ordenar por: Maior preço</option>
                </select>
            </form>
            </div>
            <div className="flex">
                    <div className="bg-[white] min-w-[308px] h-[750px] px-[30px] py-[30px] mr-[30px]"> {/* Div Principal engloba tudo */}
                        <form action="" className="">

                            <div className="pb-[20px] border-b-[1px] border-[#CCCCCC] font-bold text-[#474747] text-[16px]"> {/* Div do nome "Filtrar por" */}
                                Filtrar por
                            </div>
                            <div className="pt-[20px] ">  {/* Div da categoria "Marka" */}
                                <div className=" font-bold text-[#474747] text-[16px] pb-2">
                                    Marka
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="adiddas" name="adiddas" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="adiddas"> Adiddas</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="calenciaga" name="calenciaga" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="calenciaga"> Calenciaga</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="k-swiss" name="k-swiss" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="k-swiss"> K-swiss</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="nike" name="nike" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="nike"> Nike</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="puma" name="puma" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="puma"> Puma</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Categoria" */}
                                <div className="font-bold text-[#474747] text-[16px] pb-2">
                                    Categoria
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="esporte-e-lazer" name="esporte-e-lazer" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="esporte-e-lazer"> Esporte e lazer</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="casual" name="casual" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="casual"> Casual</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="utilitario" name="utilitario" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="utilitario"> Utilitário</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="corrida" name="corrida" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="corrida"> Corrida</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Gênero" */}
                                <div className="font-bold text-[#474747] text-[16px] pb-2">
                                    Gênero
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="masculino" name="masculino" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="masculino"> Masculino</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="feminino" name="feminino" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="feminino"> Feminino</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="unisex" name="unisex" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="unisex"> Unisex</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Estado" */}
                                <div className="font-bold text-[#474747] text-[16px] pb-2">
                                    Estado
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="radio" id="novo" name="estado" value="novo" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="novo">Novo</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="radio" id="usado" name="estado" value="usado" className="w-[22px] h-[22px] accent-[#C92071] " />
                                    <label className="text-[14px] text-[#474747] pl-2" htmlFor="usado">Usado</label>
                                </div>
                            </div>
                        </form>
                    </div>
        <ProductListing orderBy={orderBy} />
           </div>
        </div>
    </>
    )
}