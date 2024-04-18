import { useState } from 'react'
import panel1 from '../src/assets/images/Grupo 549contact.png'
import { NavLink } from 'react-router-dom'
import logo from '../src/assets/images/Asset 2@2x-1.png'
import emailIconW from '../src/assets/images/envelope-at-fill.svg'
import telephone from '../src/assets/images/telephone.svg'
import tiktok from '../src/assets/images/tiktok.svg'
import tiktokblack from '../src/assets/images/tiktokblack.svg'
import facebook from '../src/assets/images/facebook.svg'
import instagram from '../src/assets/images/instagram.svg'
import linkedin from '../src/assets/images/linkedin.svg'
import wspIcon from '../src/assets/images/whatsapp-1.svg'
import emailIcon from '../src/assets/images/envelope-at-fill-2.svg'
import facebookblack from '../src/assets/images/facebookblack.svg'
import instagramblack from '../src/assets/images/instagramblack.svg'
import linkedinblack from '../src/assets/images/linkedinblack.svg'

export const Contacto = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      <div className='bg-black flex justify-between z-50 py-6 sm:py-8 px-[10%]'>
        <div>
          <img width={186} className='w-[118px] sm:w-[186px]' src={logo} alt="montage&life" />
        </div>
        <div className='text-white sm:flex sm:flex-row gap-10 self-center hidden'>
          <div><NavLink to="/" >Inicio</NavLink></div>
          <div><NavLink to="/about">Nosotros</NavLink></div>
          <div><NavLink to="/contact">Contacto</NavLink></div>
        </div>
        <div onMouseEnter={()=>setIsPopupOpen(true)} onMouseLeave={()=>setIsPopupOpen(false)}  className='flex flex-col sm:hidden items-center gap-2 justify-center cursor-pointer'>
          <div className='h-0 w-8 border-[1.5px] border-white'></div>
          <div className='h-0 w-8 border-[1.5px] border-white'></div>
          <div className='h-0 w-8 border-[1.5px] border-white'></div>
        </div>
        {isPopupOpen && (
          <div onMouseEnter={()=>setIsPopupOpen(true)} onMouseLeave={()=>setIsPopupOpen(false)} className="text-white z-50 px-12 py-8 bg-black font-semibold flex flex-col absolute top-[60px] gap-y-2 right-0 shadow-md">
            <div><NavLink to="/" >Inicio</NavLink></div>
            <div><NavLink to="/about">Nosotros</NavLink></div>
            <div><NavLink to="/contact">Contacto</NavLink></div>
          </div>
        )}
      </div>

      <div className='bg-black flex flex-col xl:flex-row w-screen xl:h-[calc(100vh-123px)]'>
        <div className='w-full max-h-[550px] xl:hidden bg-black'>
          <img src={panel1} alt="montage&life" />
        </div>
        <div className='w-full xl:w-5/12 bg-[#EFECE8] xl:py-0 py-20 flex flex-col justify-center items-center text-center'>
          <div className='text-[42px] xl:text-7xl font-OwnersNarrowBold'>CONTÁCTANOS</div>
          <div className='lg:text-lg text-base font-ScandiaRegular w-[321px] xl:w-[440px] mt-3'>
            Por favor, contáctenos para obtener información sobre nuestros precios y paquetes, así como para solicitar nuestro 
            <span className='font-bold'>&nbsp;portafolio.</span>
          </div>
          <a href="https://wa.me/51922661867?text=Hola Montage %26 Life " className='flex justify-center ' target="_blank" rel="noreferrer">
            <div className='flex justify-center w-72 xl:w-96 h-16 rounded-lg self-center bg-black align-middle text-center text-2xl font-ScandiaRegular mt-6 lg:mt-[42px]'>
              <img width={43.5} height={43.5} src={wspIcon} alt="" />
              <p className='text-4xl ml-3 self-center text-white font-OwnersNarrowBold'>CLIC AQUÍ</p>
            </div>
          </a>
          <div className='text-center text-lg font-ScandiaRegular mt-[40px]'>O escríbenos al</div>
          <div className='flex justify-center w-96 h-16 self-center align-middle text-center text-2xl font-ScandiaRegular mt-6 lg:mt-[42px]'>
            <img width={30} height={26} src={emailIcon} alt="" />
            <p className='text-lg ml-3 self-center text-black font-ScandiaRegular '>team@montageandlife.com</p>
          </div>
          <div>
            <div className='text-center text-lg font-ScandiaRegular mt-6 xl:mt-14'>Nuestra redes sociales</div>
            <div className='flex gap-6 mt-5'>
              <a href="https://www.tiktok.com/@montageandlife" target="_blank" rel="noreferrer"><img width={37} src={tiktokblack} alt="https://www.tiktok.com/@montageandlife" /></a>
              <a href="https://www.facebook.com/profile.php?id=61556244161284" target="_blank" rel="noreferrer"><img width={42} src={facebookblack} alt="https://www.facebook.com/profile.php?id=61556244161284" /></a>
              <a href="https://www.instagram.com/montageandlife" target="_blank" rel="noreferrer"><img width={42} src={instagramblack} alt="https://www.instagram.com/montageandlife" /></a>
              <a href="https://www.linkedin.com/company/montageandlife" target="_blank" rel="noreferrer"><img width={42} src={linkedinblack} alt="https://www.linkedin.com/company/montageandlife" /></a>
            </div>
          </div>
        </div>
        <div className='hidden xl:flex xl:w-7/12 bg-black'>
          <img src={panel1} alt="montage&life" />
        </div>
      </div>

      <div className='flex flex-col gap-y-16 lg:flex-row w-screen items-center lg:items-start justify-around text-lg bg-[#373737] text-white pt-12 pb-11'>
        <div className='flex flex-col'>
          <img width={186} src={logo} alt="montage&life" />
          <div className='hidden lg:flex pt-36 text-sm'>&#169; Montage&Life Posthouse 2024</div>
        </div>
        <div>
          <div className='flex  justify-start gap-5 font-ScandiaRegular'>
            <img src={emailIconW} alt="" />
            <div>team@montageandlife.com</div>
          </div>
          <div className='flex  justify-center gap-5 mt-6 font-ScandiaRegular'>
            <img src={telephone} alt="" />
            <div>(+51) 922 661 867</div>
          </div>
        </div>
        <div>
          <div className='font-ScandiaRegular'>Síguenos y contáctanos en</div>
          <div className='flex gap-6 mt-5'>
            <a href="https://www.tiktok.com/@montageandlife" target="_blank" rel="noreferrer"><img width={37} src={tiktok} alt="https://www.tiktok.com/@montageandlife" /></a>
            <a href="https://www.facebook.com/profile.php?id=61556244161284" target="_blank" rel="noreferrer"><img width={42} src={facebook} alt="https://www.facebook.com/profile.php?id=61556244161284" /></a>
            <a href="https://www.instagram.com/montageandlife" target="_blank" rel="noreferrer"><img width={42} src={instagram} alt="https://www.instagram.com/montageandlife" /></a>
            <a href="https://www.linkedin.com/company/montageandlife" target="_blank" rel="noreferrer"><img width={42} src={linkedin} alt="https://www.linkedin.com/company/montageandlife" /></a>
          </div>
        </div>
        <div className='flex md:hidden text-sm'>&#169; Montage&Life Posthouse 2024</div>
      </div>



    </div>
  )
}
