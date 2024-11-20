import ProductCard from './ProductCard'
import Line from '../assets/line.svg'

export default function ProductDescription() {
    return (
        <div className='overflow-hidden'>
            <div className="bg-[--light-gray-3] w-screen">
                <div id="tagline" className="tracking-widest text-bold py-6 pl-24">
                    Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
                </div>

                <div id="similar" className='mx-24 pb-16'>
                    <div className='flex align-center justify-between'>
                        <h2 className='font-semibold'>Produtos Relacionados</h2>
                        <div className='flex gap-2'>
                            <span className='text-[--primary]'>Ver todos</span>
                            <img src={Line} className='size-6'/>
                        </div>
                    </div>
                    <div className='pt-6 flex justify-around mx-12'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}