import React from 'react'
import '../styles/footer.css'
import LogoFooter from '../assets/footer.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'


export default function Footer() {
    return (
        <React.Fragment>
            <footer className='w-full bg-[--dark-gray] text-[--white] flex items-start justify-between'>
                <div className="flex flex-col">
                    <img src={LogoFooter} alt="Logo do Footer" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div id="social" className='flex'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3>Informação</h3>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div className="flex flex-col">
                    <h3>Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className="flex flex-col">
                    <h3>Contato</h3>
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