import React from 'react'

const About = () => {
    
    return(
        <div name='presentation' className='w-full bg-[--backgroundII] text-[--text-primary] md:h-screen  px-8 py-20'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1400px] w-full block md:grid grid-cols-2 gap-8'>
                    <div></div>
                    <div className=' pb-14 test text-center md:text-left'>
                        <h3 className='inline text-[42px] text-[--text-primary] text-center font-bold tracking-wider border-b-[6px] border-[--text-secondary]'>
                            Présentation
                        </h3>
                    </div>
                </div>
                <div className='max-w-[1400px] w-full grid md:grid-cols-2 gap-8'>
                    <div className='m-auto hidden md:block'>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1xU9Bzegk7.json" style={{height:"400px"}}  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                    </div>
                    <div>
                        <div className=''>
                            <h5 className='text-4xl text-[--text-secondary] text-center md:text-left'>
                                Bievenue sur mon site web ! 👋
                            </h5>
                        </div>         
                        <div className='mt-10 lexend-typo text-center md:text-left'>
                            <p className='text-2xl'>
                            Je m'appelle Alexis et j'étudie la <span className=''>programmation informatique </span> depuis 3 ans. &nbsp; 
                            <br className='hidden md:block' />
                            Agé de 24 ans je viens de terminer ma formation de Concepteur Développeur d'Applications en mars 2023. Je recherche actuellement un emploi en tant que Développeur Web suite à la fin de mes études.
                            </p>
                        </div>
                        <div className='m-auto md:hidden block pt-16'>
                                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1xU9Bzegk7.json" style={{height:"200px"}}  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;