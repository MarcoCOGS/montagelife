import logo from '../src/assets/images/Asset 2@2x-1.png'
import panel from '../src/assets/images/Grupo 549.png'
import wspIcon from '../src/assets/images/whatsapp-1.svg'
import emailIcon from '../src/assets/images/envelope-at-fill-2.svg'
import checks from '../src/assets/images/ui-checks.svg'
import cloudUpload from '../src/assets/images/cloud-upload.svg'
import film from '../src/assets/images/film.svg'
import Grupo3 from '../src/assets/images/Grupo 3.svg'
import Grupo2 from '../src/assets/images/Grupo 2.svg'
import Grupo546 from '../src/assets/images/Grupo 546.svg'
import Grupo5462 from '../src/assets/images/Grupo 5462.svg'
import dropbox1 from '../src/assets/images/dropbox-1.svg'
import Grupo5 from '../src/assets/images/Grupo 5.png'
import Imagen1 from '../src/assets/images/Imagen 1.png'
import Grupo544 from '../src/assets/images/Grupo 544.png'
import emailIconW from '../src/assets/images/envelope-at-fill.svg'
import telephone from '../src/assets/images/telephone.svg'
import tiktok from '../src/assets/images/tiktok.svg'
import facebook from '../src/assets/images/facebook.svg'
import instagram from '../src/assets/images/instagram.svg'
import linkedin from '../src/assets/images/linkedin.svg'
import drive from '../src/assets/images/Google-Drive-Logo.png'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="w-screen bg-black">
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

      <div className='bg-black flex-row relative inline-block text-center'>
        <img src={panel} className='sm:w-screen object-cover object-[40%] sm:object-cover sm:h-[450px] lg:h-full min-h-[450px] max-h-[calc(100vh-123px)]' alt="montage&life" />
        <div className='absolute top-1/2 w-screen left-1/2 -translate-x-1/2 text-white'>
          <div className='text-[28px] md:text-[40px] text-center lg:text-[56px] font-OwnersNarrowBold whitespace-nowrap overflow-hidden flex justify-center'>ESTUDIO DE EDICIÓN DE VIDEO <span className='hidden lg:flex'>&nbsp; PARA</span> </div>
          <div className='text-[28px] md:text-[40px] text-center lg:text-[56px] font-OwnersNarrowBold'><span className='visible lg:hidden'>PARA</span> VIDEÓGRAFOS DE BODAS </div>
          <div className='text-base md:text-xl lg:text-2xl font-ScandiaRegular'>No dependas solo de tu tiempo,</div>
          <div className='text-base md:text-xl lg:text-2xl font-ScandiaRegular'>depende de un equipo.</div>
        </div>
      </div>

      <div className='bg-[#EFECE8] flex flex-col text-center'>
        <div className='text-black text-[40px] pt-24 font-OwnersNarrowBold hidden xl:flex justify-center'>"ESTE MODELO ESTÁ AYUDANDO A MILES DE VIDEÓGRAFOS DE TODO EL MUNDO A</div>
        <div className='text-black text-[40px] font-OwnersNarrowBold hidden xl:flex justify-center'> ENTREGAR, EN MENOS DE 15 DÍAS HÁBILES, DECENAS DE BODAS AL MES"</div>
        <div className='text-black text-[22px] md:text-[40px] pt-7 font-OwnersNarrowBold xl:hidden flex justify-center'>"ESTE MODELO ESTÁ AYUDANDO A MILES</div>
        <div className='text-black text-[22px] md:text-[40px] font-OwnersNarrowBold xl:hidden flex justify-center'>DE VIDEÓGRAFOS DE TODO EL MUNDO A</div>
        <div className='text-black text-[22px] md:text-[40px] font-OwnersNarrowBold xl:hidden flex justify-center'>ENTREGAR, EN MENOS DE 15 DÍAS HÁBILES,</div>
        <div className='text-black text-[22px] md:text-[40px] font-OwnersNarrowBold xl:hidden flex justify-center'>DECENAS DE BODAS AL MES"</div>
        <div className='flex justify-center mt-10 xl:mt-20 px-10'>
          <iframe
            title="YouTube Video"
            // width="963"
            // height="541"
            className='w-[963px] h-[60vw] lg:h-[541px]'
            src={'https://www.youtube.com/embed/unRKhXjEwU0'}
            allowFullScreen
          ></iframe>
        </div>
        <div className='text-center text-2xl font-ScandiaRegular mt-10 lg:mt-[73px]'>Contáctanos</div>
        <a href="https://wa.me/message/EAHIY7LXB5AQB1" className='flex justify-center ' target="_blank" rel="noreferrer">
          <div className='flex justify-center w-[281px] md:w-96 h-16 rounded-lg self-center bg-black align-middle text-center text-2xl font-ScandiaRegular mt-[42px]'>
            <img width={43.5} height={43.5} src={wspIcon} alt="" />
            <p className='text-4xl ml-3 self-center text-white font-OwnersNarrowBold'>CLIC AQUÍ</p>
          </div>
        </a>
        <div className='text-center text-lg font-ScandiaRegular mt-[73px]'>O escríbenos al</div>
        <div className='flex justify-center w-96 h-16 self-center align-middle text-center text-2xl font-ScandiaRegular mt-[42px] mb-10 lg:mb-32'>
          <img width={30} height={26} src={emailIcon} alt="" />
          <p className='text-lg ml-3 self-center text-black font-ScandiaRegular'>team@montageandlife.com</p>
        </div>
      </div>

      <div className='bg-white text-center pb-24 lg:pb-44 text-[#373737]'>
        <div className='text-2xl font-ScandiaRegular pt-12 lg:pt-32'>Algunas estadísticas sobre nosotros</div>
        <div className='flex flex-col items-center lg:flex-row justify-center pt-8 lg:pt-16 gap-8 lg:gap-12 xl:gap-28'>
          <div className='text-center max-w-[1200px]'>
            <div className='flex flex-row justify-center'>
              <div className='font-OwnersNarrowBold text-8xl '>5</div>
              <div className='text-4xl font-ScandiaRegular'>días</div>
            </div>
            <div className='text-center w-60 text-lg font-ScandiaRegular'>Tiempos de entrega desde 5 a 15 días hábiles</div>
          </div>
          <div className='text-center'>
            <div className='flex flex-row justify-center'>
              <div className='font-OwnersNarrowBold text-8xl'>200</div>
              <div className='text-4xl font-ScandiaRegular'>+</div>
            </div>
            <div className='text-center w-52 text-lg font-ScandiaRegular'>Video de bodas terminados</div>
          </div>
          <div className='text-center'>
            <div className='flex flex-row justify-center'>
              <div className='font-OwnersNarrowBold text-8xl '>6</div>
              <div className='text-4xl font-ScandiaRegular'>años</div>
            </div>
            <div className='text-center w-48 text-lg font-ScandiaRegular'>Experiencia en la edición de video</div>
          </div>
          <div className='text-center'>
            <div className='flex flex-row justify-center'>
              <div className='font-OwnersNarrowBold text-8xl'>100</div>
              <div className='text-4xl font-ScandiaRegular'>%</div>
            </div>
            <div className='text-center w-36 text-lg font-ScandiaRegular'>Satisfacción garantizada</div>
          </div>
        </div>
      </div>

      <div className='bg-[#373737] pt-20 lg:pt-48 text-white flex flex-col items-center'>
        <div className='flex flex-col items-center lg:flex-row w-full max-w-[1350px] justify-around'>
          <div className='lg:w-1/3 max-w-72'>
            <div className='w-72 text-[62px] md:text-[72px] text-center lg:text-start font-OwnersNarrowBold tracking-[1.44px] leading-tight'>NUESTRO PROCESO EN POCAS PALABRAS</div>
            <div className='text-lg text-center lg:text-star font-ScandiaRegular'>Hacemos que lo complejo parezca sencillo en muy pocos pasos.</div>
          </div>
          <div className='lg:w-2/3'>
            <div className='flex flex-col items-center  md:flex-row lg:gap-2 xl:gap-16 md:gap-8 md:justify-around mt-16 lg:mt-5'>
              <div className='flex flex-col w-full justify-center'>
                <div className='self-center'><img width={55} height={51} src={checks} alt="" /></div>
                <div className='flex items-center sm:justify-center justify-start pl-2 gap-6 md:gap-2.5'>
                  <div className='font-OwnersNarrowBold text-8xl'>1</div>
                  <div className='border-dashed border-2 border-black h-20 w-0'></div>
                  <div className='w-36 font-ScandiaRegular'>Completa el formulario de inicio.</div>
                </div>
              </div>
              <div className='flex flex-col w-full justify-center'>
                <div className='self-center'><img width={54} height={51} src={cloudUpload} alt="" /></div>
                <div className='flex items-center justify-start sm:px-1 gap-3 md:gap-2.5'>
                  <div className='font-OwnersNarrowBold text-8xl'>2</div>
                  <div className='border-dashed border-2 border-black h-20 w-0'></div>
                  <div className='w-[165px] font-ScandiaRegular'>Transfiere tu material a nuestro Dropbox o Drive.</div>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <div className='self-center'><img width={50} height={50} src={film} alt="" /></div>
                <div className='flex items-center gap-2.5'>
                  <div className='font-OwnersNarrowBold text-8xl'>3</div>
                  <div className='border-dashed border-2 border-black h-20 w-0'></div>
                  <div className='w-44 font-ScandiaRegular'>¡Empieza la edición! En 5 a 15 días hábiles tendrás tu video.</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center md:flex-row justify-center gap-16 md:gap-20 mt-16'>
              <div className='flex flex-col justify-center'>
                <div className='self-center'><img width={59} height={51} src={Grupo3} alt="" /></div>
                <div className='flex items-center gap-2.5'>
                  <div className='font-OwnersNarrowBold text-8xl'>4</div>
                  <div className='border-dashed border-2 border-black h-20 w-0'></div>
                  <div className='w-44 font-ScandiaRegular'>Aprueba o solicita los cambios necesarios.</div>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <div className='self-center'><img width={50} height={50} src={Grupo2} alt="" /></div>
                <div className='flex items-center gap-2.5'>
                  <div className='font-OwnersNarrowBold text-8xl'>5</div>
                  <div className='border-dashed border-2 border-black h-20 w-0'></div>
                  <div className='w-44 font-ScandiaRegular'>Realiza el pago y te entregamos tu video.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='text-center bg-[#373737] text-[#EFECE8] pt-36'>
        <div className='text-[56px] font-OwnersNarrowBold'>USAMOS LA MEJOR TECNOLOGÍA PARA</div>
      </div> */}

      <div className='bg-[#373737] flex-row relative flex justify-center ml-[-10px] lg:inline-block text-center -mt-1 pt-10 lg:pt-36'>
        <img src={Grupo546} height={180} className='hidden w-screen lg:flex absolute  h-[180px] px-10' alt="waves" />
        <img src={Grupo5462} height={180} className='lg:hidden absolute h-[140px] left justify-center ml-[-30px]' alt="waves" />
        <div className=' hidden lg:flex justify-center w-screen h-[90px] text-center items-end bg-[#373737] text-[#EFECE8] text-4xl 2xl:text-[50px] font-OwnersNarrowBold'>
          USAMOS LA MEJOR TECNOLOGÍA PARA
        </div>
        <div className='hidden lg:flex justify-center text-center h-[90px] bg-[#EFECE8] text-[#373737] text-4xl 2xl:text-[50px] font-OwnersNarrowBold'>
          HACER DE TUS VIDEOS UNA OBRA DE ARTE
        </div>
        <div className='w-full lg:hidden flex justify-center h-[70px] text-center items-end bg-[#373737] text-[#EFECE8] text-4xl 2xl:text-[50px] font-OwnersNarrowBold'>
          &nbsp;
        </div>
      </div>
      <div className='text-center text-[#373737]  pt-28 bg-[#EFECE8] -mb-1  flex flex-col items-center'>
          <div className='text-[22px] lg:hidden font-OwnersNarrowBold'>USAMOS LA MEJOR TECNOLOGÍA PARA</div>
          <div className='text-[22px] lg:hidden font-OwnersNarrowBold'>HACER DE TUS VIDEOS UNA OBRA DE ARTE</div>
      </div>

      {/* <div className='text-center bg-[#EFECE8]'>
        <img src={Grupo546} alt="" />
        <div className='text-[56px] text-[#373737] font-OwnersNarrowBold'>HACER DE TUS VIDEOS UNA OBRA DE ARTE</div>
      </div> */}

      <div className='text-center text-[#373737]  pt-16 lg:pt-0 bg-[#EFECE8] flex flex-col items-center pb-36'>
        <div className='flex flex-col items-center lg:flex-row w-full max-w-[1350px] justify-around gap-10 xl:gap-20 px-10'>
          <div className='lg:w-2/3'>
            <div className='flex flex-col items-center md:flex-row gap-10 lg:gap-1 justify-around'>
              <div className='flex flex-col items-center'>
                <div className='text-center flex justify-center gap-4'><img src={dropbox1} className='w-[110px]' alt="" /><img src={drive} className='w-[110px]' alt="" /></div>
                <div className='font-ScandiaRegular pt-6 leading-tight  tracking-[0.18px] w-60'>Dropbox permite una rápida transferencia y descarga de tu material.</div>
              </div>
              <div className='flex  flex-col items-center'>
                <div><img src={Grupo5} className='w-[103px]' alt="" /></div>
                <div className='font-ScandiaRegular pt-6 leading-tight  tracking-[0.18px] w-72'>Usamos Pulgins de Inteligencia Artificial para eliminar ruidos y reverberaciones de la voz.</div>
              </div>
            </div>
            <div className='flex flex-col items-center md:flex-row gap-10 lg:gap-1 justify-around mt-10 lg:mt-16'>
              <div className='flex flex-col items-center'>
                <div><img src={Imagen1} className='w-[183px]' alt="" /></div>
                <div className='font-ScandiaRegular pt-6 leading-tight  tracking-[0.18px] w-72'>Puedes elegir la música que quieras desde nuestra librería libre de derechos.</div>
              </div>
              <div className='flex flex-col items-center'>
                <div><img src={Grupo544} className='w-[229px]' alt="" /></div>
                <div className='font-ScandiaRegular pt-6 leading-tight  tracking-[0.18px] w-72'>Usamos los dos programas líderes en la industria para editar y colorizar.</div>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 max-w-96 text-[#373737]'>
            <div className='text-[62px] xl:text-[70px] lg:text-start font-OwnersNarrowBold tracking-[1.44px] leading-tight'>LLEVAMOS TUS VIDEOS A OTRO NIVEL</div>
            <div className='text-base xl:text-lg text-start font-ScandiaRegular mt-7'>Ahorra tiempo y dinero, pero a la vez aumenta la calidad de tus videos con la mejor tecnología en el mercado.</div>
          </div>
        </div>
      </div>

      <div className='bg-white flex flex-col items-center w-screen text-center pb-14 md:pb-28'>
        <div className='text-[42px] lg:text-[70px] font-OwnersNarrowBold mt-16 text-[#373737]'>NUESTROS SERVICIOS</div>
        <div className='flex w-screen flex-col items-center md:items-start md:flex-row mt-16 justify-center gap-10 xl:gap-0 xl:justify-between  max-w-[1350px] px-10'>
          <div className='w-44 flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-4xl bg-black text-center items-stretch text-white'>CULLING</div>
            <div className='font-ScandiaRegular pt-5 w-60 md:w-36 text-center leading-tight'>
              Sincronización multicámara.
              <br/><br/>
              Clasificación y selección de las mejores tomas.
              <br/><br/>
              Selección en Premier Pro y Davinci Resolve.
            </div>
          </div>
          <div className='hidden md:flex border-dashed border border-[#707070] h-36 w-0 self-center mt-20'></div>
          <div className='w-44 flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-4xl bg-black text-center items-stretch text-white'>TEASER</div>
            <div className='font-ScandiaRegular pt-5 w-60 md:w-44 text-center leading-tight'>
              1 a 2 minutos
              <br/><br/>
              Estilo cinematográfico
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
            </div>
          </div>
          <div className='hidden md:flex border-dashed border border-[#707070] h-36 w-0 self-center mt-20'></div>
          <div className='w-44 flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-4xl bg-black text-center items-stretch text-white'>TRAILER</div>
            <div className='font-ScandiaRegular pt-5 w-60 md:w-44 text-center leading-tight'>
              3 a 10 minutos
              <br/><br/>
              Estilo cinematográfico
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
              <br/><br/>
              SFX
            </div>
          </div>
          <div className='hidden xl:flex border-dashed border border-[#707070] h-36 w-0 self-center mt-20'></div>
          <div className='w-44 flex md:hidden xl:flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-4xl bg-black text-center items-stretch text-white'>HIGHLIGHT</div>
            <div className='font-ScandiaRegular pt-5 w-60 md:w-44 text-center leading-tight'>
              10 a 30 minutos
              <br/><br/>
              Estilo documental
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
              <br/><br/>
              SFX
            </div>
          </div>
          <div className='hidden xl:flex border-dashed border border-[#707070] h-36 w-0 self-center mt-20'></div>
          <div className='w-44 flex md:hidden xl:flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-4 text-4xl bg-black text-center items-stretch text-white'>FULL FILM</div>
            <div className='font-ScandiaRegular pt-5 w-60 md:w-44 text-center leading-tight'>
              45 a 90 minutos
              <br/><br/>
              Estilo documental
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
              <br/><br/>
              SFX
            </div>
          </div>
        </div>
        <div className='hidden md:flex xl:hidden w-screen flex-row mt-16 justify-center gap-10 max-w-[1350px] px-10'>
          <div className='w-44 flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-8 text-4xl bg-black text-center items-stretch text-white'>HIGHLIGHT</div>
            <div className='font-ScandiaRegular pt-5 xl:w-44 text-center leading-tight'>
              10 a 30 minutos
              <br/><br/>
              Estilo documental
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
              <br/><br/>
              SFX
            </div>
          </div>
          <div className='border-dashed border border-[#707070] h-36 w-0 self-center mt-20'></div>
          <div className='w-44 flex flex-col items-center'>
            <div className='font-OwnersNarrowBold p-1.5 px-4 text-4xl bg-black text-center items-stretch text-white'>FULL FILM</div>
            <div className='font-ScandiaRegular pt-5 xl:w-44 text-center leading-tight'>
              45 a 90 minutos
              <br/><br/>
              Estilo documental
              <br/><br/>
              Corrección de color y etalonaje
              <br/><br/>
              Música licenciada
              <br/><br/>
              Limpieza de audio
              <br/><br/>
              SFX
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#EFECE8] flex flex-col items-center text-center'>
        <div className='text-[#373737] w-64 sm:w-full text-[42px] md:text-[56px] pt-24 font-OwnersNarrowBold'>EMPECEMOS A TRABAJAR</div>
        <div className='text-center text-base md:text-lg font-ScandiaRegular mt-4 self-center md:w-[477px] px-12'>
          Por favor, contáctenos para obtener información sobre nuestros precios y paquetes, así como para solicitar nuestro portafolio.
        </div>
        <a href="https://wa.me/message/EAHIY7LXB5AQB1" className='flex justify-center ' target="_blank" rel="noreferrer">
          <div className='flex justify-center w-72 md:w-96 h-16 rounded-lg self-center bg-black align-middle text-center text-2xl font-ScandiaRegular mt-[42px]'>
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
      

      <div className='flex flex-col gap-y-16 lg:flex-row w-screen items-center ld:items-start justify-around text-lg bg-[#373737] text-white pt-12 pb-11'>
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
