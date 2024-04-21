import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../src/assets/images/Asset 2@2x-1.png'
import emailIconW from '../src/assets/images/envelope-at-fill.svg'
import telephone from '../src/assets/images/telephone.svg'
import tiktok from '../src/assets/images/tiktok.svg'
import facebook from '../src/assets/images/facebook.svg'
import instagram from '../src/assets/images/instagram.svg'
import linkedin from '../src/assets/images/linkedin.svg'
import wspIcon from '../src/assets/images/whatsapp-1.svg'
import emailIcon from '../src/assets/images/envelope-at-fill-2.svg'
import Grupo546 from '../src/assets/images/Grupo 546.svg'
import book from '../src/assets/images/book.svg'
import soundwave from '../src/assets/images/soundwave.svg'
import palette from '../src/assets/images/palette.svg'
import sendArrow from '../src/assets/images/send-arrow-down-fill.svg'
import fileEarmark from '../src/assets/images/file-earmark-lock2.svg'
import cashStack from '../src/assets/images/cash-stack.svg'
import Desplazamient from '../src/assets/images/Desplazamient.png'
import Desplazamient1 from '../src/assets/images/Desplazamient-1.png'

export const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className='w-screen flex-col items-center'>
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

      <div className='bg-[#EFECE8] w-screen flex flex-col align-middle items-center px-8'>
        <div className='text-[62px] lg:text-[70px] text-center font-OwnersNarrowBold tracking-[1.44px] leading-tight mt-20'>SOBRE NOSOTROS</div>
        <div className='lg:hidden md:text-justify mt-6 px-3 text-center text-lg font-ScandiaRegula max-w-[750px]'>
          Montage & Life es una empresa de edición de video latinoamericana para videógrafos de bodas de todo el mundo.
          Buscamos que cada uno de nuestros clientes tengan una atención personalizada, entregando videos de alta calidad
          con tiempos de entrega de entre 5 a 15 días hábiles.
        </div>
        <div className='flex flex-col lg:flex-row justify-center w-full lg:gap-5 max-w-[1250px] mt-8 lg:mt-16 '>
          <div className='lg:w-1/3 flex flex-col items-center'>
            <img width={376} src={Desplazamient} alt="" />
            <div className='px-10 lg:px-16 text-start w-[376px] lg:w-full text-2xl font-bold mt-4 text'>Emilio Cruz</div>
            <div className='px-10 lg:px-16 text-start w-[376px] lg:w-full text-lg'>Fundador y Editor Principal</div>
          </div>
          <div className='lg:w-2/3 flex flex-col items-center lg:items-end'>
            <div className='hidden lg:flex text-lg font-ScandiaRegula max-w-[750px]'>
              Montage & Life es una empresa de edición de video latinoamericana para videógrafos de bodas de todo el mundo.
              Buscamos que cada uno de nuestros clientes tengan una atención personalizada, entregando videos de alta calidad
              con tiempos de entrega de entre 5 a 15 días hábiles.
            </div>
            <div className='text-lg font-ScandiaRegula bg-[#373737] rounded-xl p-12 text-white mt-7 max-w-[750px]'>
              Con más de seis años de experiencia en la postproducción audiovisual, he encontrado mi pasión en la edición de
              videos de bodas. Inspirado por el éxito de las empresas de <span className='italic font-ScandiaRegula'>Outsource Wedding Video Editing</span>, he decidido traer
              este modelo para el los videógrafos de América Latina y Estados Unidos.
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center w-full  lg:gap-5 max-w-[1250px]'>
          <div className='lg:hidden flex flex-col items-center mt-8'>
            <img width={376} src={Desplazamient1} alt="" />
            <div className='px-10 lg:px-16 text-start w-[376px] lg:w-full text-2xl font-bold mt-4 text'>Ana Lucía Castañeda</div>
            <div className='px-10 lg:px-16 text-start w-[376px] lg:w-full text-lg'>Co-Fundadora y Gerente de <br />Marketing y Ventasl</div>
          </div>
          <div className='lg:w-3/5 flex flex-col items-center'>
            <div className=' text-lg font-ScandiaRegula bg-[#373737] mt-8 lg:mt-[10%] rounded-xl p-12 text-white max-w-[750px]'>
              Tras graduarme como comunicadora audiovisual, comencé a tomar interés en el mundo de las bodas y eventos.
              En mis labores de videografía y creación de contenido, pude entender el porqué la mayoría de videógrafos,
              tomaba un largo tiempo en entregar los proyectos: la edición. Por lo cual, fundamos Montage & Life para
              así juntar nuestra pasión por las bodas y la edición de video.
            </div>
          </div>
          <div className='hidden w-2/5 lg:flex flex-col items-center lg:items-end pr-10'>
            <img width={376} src={Desplazamient1} alt="" />
            <div className='px-10 text-2xl font-bold mt-4'>Ana Lucía Castañeda</div>
            <div className='px-10 text-lg'>Co-Fundadora y Gerente de <br />Marketing y Ventas</div>
          </div>
        </div>
        <div className='text-[28px] px-4 sm:text-4xl md:text-5xl xl:text-[70px] pb-1 lg:pb-5 mt-24 lg:mt-24 text-center font-OwnersNarrowBold tracking-[1.44px] leading-tight'>ESTAS SON ALGUNAS DE</div>
      </div>

      <div className='text-white pb-16 lg:pb-0 flex flex-col w-screen items-center bg-[#373737]'>
        <div className='text-[28px] px-4 sm:text-4xl pt-1 lg:pt-5 md:text-5xl xl:text-[70px] text-center font-OwnersNarrowBold tracking-[1.44px] leading-tight'>LAS RAZONES PARA ELEGIRNOS</div>
        <div className='flex flex-col gap-y-16 gap-8 px-10 lg:gap-y-0 lg:flex-row justify-around w-full max-w-[1350px] mt-24'>
          <div className='flex flex-col items-center text-center'>
            <div><img width={81} src={book} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1 px-8 text-[32px] lg:text-[27px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-11'>NARRACIÓN</div>
            <div className='text-base max-w-96 font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Nos dedicamos a tejer y estructurar diálogos para impulsar la
              <span className='font-bold'> narrativa</span> , siendo la columna vertebral de cada película de bodas que creamos.
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div><img width={66} src={soundwave} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-[32px] lg:text-[27px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-12'>MÚSICA Y SONIDO</div>
            <div className='text-base max-w-[350px] font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Utilizamos plugins de Inteligencia Artificial para resolver problemas de audio, y además, podrás seleccionar música con licencia de nuestra extensa biblioteca en
              <span className='font-bold'> Soundstripe</span>.
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div><img width={81} src={palette} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-[32px] lg:text-[27px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-7'>CORRECCIÓN DEL COLOR</div>
            <div className='text-base max-w-[420px] font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Una corrección de color adecuada establece el tono perfecto para tu película. Mejoramos el aspecto de tus videos aplicando
              <span className='font-bold'> corrección de color</span>.
            </div>
          </div>
        </div>
        <div className='flex flex-col px-10 gap-y-16 gap-8 lg:gap-y-0 lg:flex-row justify-around w-full  max-w-[1350px] mt-16 lg:mt-24'>
          <div className='flex flex-col items-center text-center'>
            <div><img width={81} src={sendArrow} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1 px-8 text-[32px] lg:text-[27px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-12'>FACILIDAD DE USO</div>
            <div className='text-base max-w-[410px] font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Buscamos hacer la transferencia de material lo más fácil posible. Puedes compartirlo con nosotros en Dropbox o Google Drive sin inconvenientes.
              {/* Cada cliente tiene una carpeta única en nuestro
              <span className='font-bold'> Dropbox</span> que le compartimos. De esta manera solo tendrás que arrastrar tus carpetas y estaremos más que listos para trabajar. */}
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div><img width={61} src={fileEarmark} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-[32px] lg:text-[27px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-12'>CONFIDENCIALIDAD</div>
            <div className='text-base max-w-[390px] font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Apoyamos totalmente los acuerdos de
              <span className='font-bold'> confidencialidad</span>.
              Entendemos que algunos clientes desean mantener en secreto la identidad de nuestros talentosos editores frente a competidores y clientes potenciales.
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div><img width={81} src={cashStack} alt="montage&life" /></div>
            <div className='font-OwnersNarrowBold p-1.5 px-2 text-[32px] lg:text-[26.5px] xl:text-[32px] xl2:text-4xl bg-black text-center items-stretch text-white mt-[70px]'>CRECIMIENTO EMPRESARIAL</div>
            <div className='text-base max-w-[410px] font-ScandiaRegular mt-9 px-8 lg:px-0'>
              Al confiarnos sus necesidades de edición, podrá liberar
              <span className='font-bold'> tiempo para enfocarse </span>
              en otras áreas importantes, como la comercialización de su negocio y la captación de más clientes.
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#373737] flex-row relative hidden lg:inline-block text-center pt-16'>
        <img src={Grupo546} height={180} className='absolute w-screen h-[180px] px-10' alt="waves" />
        <div className='w-screen h-[90px] text-center flex justify-center items-end bg-[#373737] text-[#EFECE8] text-[50px] font-OwnersNarrowBold'>
          &nbsp;
        </div>
        <div className='text-center h-[90px] bg-[#EFECE8] text-[#373737] text-[50px] font-OwnersNarrowBold'>
          &nbsp;
        </div>
      </div>

      <div className='bg-[#EFECE8] flex flex-col text-center'>
        <div className='text-[#373737] text-[56px] pt-24 font-OwnersNarrowBold'>EMPECEMOS A TRABAJAR</div>
        <div className='text-center text-base lg:text-lg font-ScandiaRegular mt-4 self-center max-w-[290px] lg:max-w-[477px]'>
          Por favor, contáctenos para obtener información sobre nuestros precios y paquetes, así como para solicitar nuestro portafolio.
        </div>
        <a href="https://wa.me/message/EAHIY7LXB5AQB1" className='flex justify-center ' target="_blank" rel="noreferrer">
          <div className='flex justify-center w-72 lg:w-96 h-16 rounded-lg self-center bg-black align-middle text-center text-2xl font-ScandiaRegular mt-[42px]'>
            <img width={43.5} height={43.5} src={wspIcon} alt="" />
            <p className='text-4xl ml-3 self-center text-white font-OwnersNarrowBold'>CLIC AQUÍ</p>
          </div>
        </a>
        <div className='text-center text-lg font-ScandiaRegular mt-[40px]'>O escríbenos al</div>
        <div className='flex justify-center w-96 h-16 self-center align-middle text-center text-2xl font-ScandiaRegular mt-[42px] mb-32'>
          <img width={30} height={26} src={emailIcon} alt="" />
          <p className='text-lg ml-3 self-center text-black font-ScandiaRegular '>team@montageandlife.com</p>
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
