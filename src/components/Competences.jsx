import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Php from '../assets/php.png';
import Npm from '../assets/npm.png';


const Skills = () => {
    
    return (
        <div name='competences' className='w-full md:h-screen bg-[--backgroundI] px-8 py-20'>
            {/* Container */}
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-[--text-primary] mb-10 text-center md:text-left '>
                    <h3 className='inline text-[42px] text-center font-bold tracking-wider border-b-[6px] border-[--text-secondary]'>Compétences</h3>
                    <p className='text-xl py-4 font-bold mt-10'>Les technologies et outils que j'ai pu utilisés au cours de mon expérience</p>
                </div>

                <div className='w-full text-[--text-primary] grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-10 text-center py-8 '>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#f16529] hover:md:scale-105 hover:text-[#f16529] hover:border-b-2 hover:border-b-[#f16529] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4' src= {HTML} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>HTML</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#039be5] hover:md:scale-105 hover:text-[#039be5] hover:border-b-2 hover:border-b-[#039be5] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4' src= {CSS} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>CSS</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#44a8b3] hover:md:scale-105 hover:text-[#44a8b3] hover:border-b-2 hover:border-b-[#44a8b3] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4 h-[80px]' src= {Tailwind} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#617cbe] hover:md:scale-105 hover:text-[#617cbe] hover:border-b-2 hover:border-b-[#617cbe] hover:bg-[#050e1b] duration-500'>
                        <img className='w-28 mx-auto mb-4 mt-[36px]' src= {Php} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>PHP</p>
                    </div>
                    <div className='w-full h-full shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#ffd600] hover:md:scale-105 hover:text-[#ffd600] hover:border-b-2 hover:border-b-[#ffd600] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4' src= {JavaScript} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>JavaScript</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-[#00d8ff] hover:md:scale-105 hover:text-[#00d8ff] hover:border-b-2 hover:border-b-[#00d8ff] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4' src= {ReactImg} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>React</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path flex flex-col justify-center shadow-[#040c16] border-b-2 border-[#c12127] hover:md:scale-105 hover:text-[#c12127] hover:border-b-2 hover:border-b-[#c12127] hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto mb-4 mt-[52px]' src= {Npm} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>Npm</p>
                    </div>
                    <div className='shadow-md bg-[#091528] path shadow-[#040c16] border-b-2 border-2-white hover:md:scale-105 hover:text-white hover:border-b-2 hover:border-b-white hover:bg-[#050e1b] duration-500'>
                        <img className='w-20 mx-auto my-4' src= {GitHub} alt="HTML icon" />
                        <p className='my-4 font-bold tracking-[2px]'>GitHub</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Skills;