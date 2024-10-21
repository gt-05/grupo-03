import React from 'react'
import '../styles/footer.css'
import LogoFooter from '../assets/footer.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'


export default function Footer() {
    return (
        <React.Fragment>
            <footer className='w-full px-40 pb-20 bg-[--dark-gray] text-[--white] flex items-start justify-between'>
                <div className="flex flex-col w-80">
                    <img src={LogoFooter} alt="Logo do Footer" className='w-64 pt-12 pb-6'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div id="social" className='pt-8 flex w-36 justify-between'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className='font-bold'>Informação</h3>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div className="flex flex-col">
                    <h3 className='font-bold'>Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className="flex flex-col">
                    <h3 className='font-bold'>Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
                <div className="flex"></div>
                <div className="flex"></div>
                <div className="flex"></div>
            </footer>
        </React.Fragment>
    )
}