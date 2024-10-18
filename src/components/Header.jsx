import React from 'react'
import '../styles/header.css'
import Logo from '../assets/logo.svg'
import Search from '../assets/search.svg'
import Market from '../assets/market.svg'

export default function Header() {
    return (
        <React.Fragment>
            <header className='w-full'>
                <div className='flex  px-40 py-10 align-center justify-between'>
                    <div id="logo-wrapper" className='flex mx-8'>
                        <img src={Logo} alt="Logo Digital College" className='size-10' />
                        <h1 className='font-semibold text-[--primary] text-4xl'>Digital Store</h1>
                    </div>
                    <div className='bg-[--light-gray-3] w-full my-4 mx-16 flex items-center justify-between rounded p-2'>
                        <span>Tênis</span>
                        <img src={Search} alt="Busca por produto" className='size-6' />
                    </div>
                    <div id="market-wrapper" className='flex items-center justify-between w-80'>
                        <a href="#" className='text-[--dark-gray-2] underline'>Cadastre-se</a>
                        <button className="btn bg-[--primary] text-[--white] rounded px-8 py-2 font-bold">Entrar</button>
                        <img src={Market} alt="Carrinho" />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}