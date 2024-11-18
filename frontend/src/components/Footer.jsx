import React from 'react'
import '../styles/footer.css'
import LogoFooter from '../assets/footer.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'


export default function Footer() {
    return (
        <React.Fragment>
            <footer className='w-full'>
                <div className='px-40 pb-20 bg-[--dark-gray] text-[--white] flex items-start justify-evenly'>
                    <div className="flex flex-col w-80 mr-24">
                        <img src={LogoFooter} alt="Logo do Footer" className='w-64 pt-12 pb-6' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div id="social" className='pt-8 flex w-36 justify-between'>
                            <img src={Facebook} alt="Facebook" />
                            <img src={Instagram} alt="Instagram" />
                            <img src={Twitter} alt="Twitter" />
                        </div>
                    </div>
                    <div className="flex flex-col pt-12 pb-2 w-48 leading-8 text-[--white]">
                        <h3 className='font-bold pb-6 text-[--white]'>Informação</h3>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                    <div className="flex flex-col pt-12 pb-2 w-48 leading-8 text-[--white]">
                        <h3 className='font-bold pb-6 text-[--white]'>Categorias</h3>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                    <div className="flex flex-col pt-12 pb-2 w-48 text-[--white]">
                        <h3 className='font-bold pb-6 leading-8 text-[--white]'>Contato</h3>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p className='leading-8'>(85) 3051-3411</p>
                    </div>
                </div>
                <div id="trademark" className='bg-[--dark-gray] text-[--white] flex items-center justify-center text-sm'>
                    <div className='w-4/5 border-t py-10 flex items-center justify-center'>
                        @ 2022 Digital College
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}