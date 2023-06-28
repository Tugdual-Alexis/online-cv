import React from 'react'

const Contact = () => {
  
  return (
    <div name='contact' className='w-full md:h-screen bg-[--backgroundI] flex justify-center items-center py-20 px-8'>
        <form method='POST' action="https://getform.io/f/57a74525-89e0-4db7-b7ec-b5d4363195df" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center text-[--text-primary]'>
                <h3 className='text-[42px] font-bold tracking-wider'>TEEEST</h3>
                <p className='text-xl py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, autem.</p>
            </div>
            <div className=' font-bold tracking-wider'>
              <div>
                <label className='text-[#ff8906] my-2 text-xl' htmlFor="nom">Nom</label>
                <input className='bg-[#ffffff] text-black font-normal outline-none p-3 w-full mb-4 border-t-[#ff8906] border-t-4 rounded-b-lg ' type="text" placeholder='Entrez votre nom' name='nom' />
              </div>
              <div>
                <label className='text-[#ff8906] my-2 text-xl' htmlFor="email">Email</label>
                <input className='bg-[#ffffff] text-black font-normal outline-none w-full p-3 mb-4 border-t-4 border-[#ff8906] rounded-b-lg' type="email" placeholder='Entrez votre email' name='email' />
              </div>
              <div>
                <label className='text-[#ff8906] my-2 text-xl' htmlFor="message">Message</label>
                <textarea className='bg-[#ffffff] text-black max-h-96 min-h-[200px] font-normal outline-none w-full p-3 mb-4 border-t-4 border-[#ff8906] rounded-b-lg' placeholder='Entrez votre message' name="message" id="" rows="8"></textarea>
              </div>
            </div>
            <div className='flex justify-center gap-4'>
              <button type='reset' className='text-black bg-[#ff8906]  px-4 py-3 mt-2 font-bold'>Réinitialiser</button>
              <button className='text-white border-2 hover:border-[#ff8906] hover:text-[#ff8906] px-4 py-3 mt-2 font-bold'>Envoyez</button>
            </div>
            <img src="" alt="" />
        </form>
    </div>
  )
}

export default Contact;