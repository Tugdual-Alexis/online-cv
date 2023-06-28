import React from 'react';
import {Link} from 'react-scroll';
import Typewriter from 'typewriter-effect';

import Imgillu from '../assets/illu.png'
import Cv from '../assets/cv.pdf'

const Home = () => {

    return (
        <div name='accueil' className='bg-[--backgroundI] w-full sm:h-screen overflow-hidden'>
            <div className='testbg'>
                <div className='hidden md:block'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>    
                <div className='z-50 md:h-full h-auto max-w-[1200px] flex flex-col justify-center md:items-center mx-auto px-8'>
                    <div className="lg:grid block grid-cols-3 xl:gap-24">
                        <div className='col-span-2'>
                            <h1 className='text-[--text-primary] pt-10 text-3xl sm:text-6xl font-bold tracking-widest'>
                                Alexis TUGDUAL 
                            </h1>
                            <h2 className='text-[--text-secondary] tracking-wide lg:text-5xl md:text-4xl hidden md:inline pt-8'>
                                <Typewriter
                                    options={{
                                        autoStart:true,
                                        loop:true,
                                        delay:100,
                                        strings:"Développeur Front-End  . . . ",
                                    }}
                                />
                            </h2>
                            <h2 className='md:hidden text-[--text-primary] text-2xl sm:text-4xl'>
                                Développeur Front-End
                            </h2>
                            <div name='container_illu' className='w-72 md:w-80 lg:w-96 illu m-auto lg:m-0 lg:hidden'>
                                <img src={Imgillu} alt="" />
                            </div>
                            <p className='text-[--text-primary] lg:mb-16 text-lg lg:text-xl lg:mt-14 pb-6 max-w-[650px]'>
                                Agé de 24 ans je viens de terminer ma formation de Concepteur Développeur d'Applications en mars 2023. <br />
                                Je recherche actuellement un emploi en tant que <span className='font-semibold -tracking-tighter'>Développeur Web</span> suite à la fin de mes études.
                            </p>
                            <div className='flex pb-20 md:pb-0'>
                                <button className='text-[--text-primary] bg-[--backgroundI] justify-center border-2 mr-2 border-[--text-secondary] rounded-2xl sm:text-xl px-6 py-3 my-2 flex items-center font-bold tracking-wider 
                                                     hover:border-[--text-secondary] hover:text-[--text-secondary]'>
                                    <Link className='flex items-center' to="projets" smooth={true} duration={1500}>
                                        Mes Projets 📁
                                    </Link>
                                </button>
                                <button className='bg-[--text-secondary] text-[--text-third] justify-center border-2 ml-2 border-[--second] rounded-2xl sm:text-xl px-6 py-3 my-2 flex items-center hover:text-[--backgroundI] font-bold  tracking-wider'>
                                    <a href={Cv} target='_blank' rel='noreferrer' className='flex items-center'>
                                        CV   
                                    </a>
                                </button>
                            </div> 
                        </div>
                        <div name='container_illu' className='w-72 lg:w-96 illu m-auto lg:m-0 hidden lg:block'>
                            <img src={Imgillu} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Home;