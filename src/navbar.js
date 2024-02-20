import React from 'react'

export default function Navbar() {
  return (
   <>
   <div className='container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto'>
   <div className='navbar flex w-full h-[50px] md:h-[320px] lg:h-[320px] justify-between lg:mx-0 px-[10px] 3xl:px-[18px]'>
    <div className='navbar-logo-div'>
      <a href='#'>
<img alt='navbar-logo' className='w-[60%] sm:w-[70%] md:w-[80%] lg:w-[100%]' src='/images/logo.svg'></img>
</a>
    </div>
    <div className='md:mt-[30px] mt-[20px] sm:mt-[20px] '>
        <button className=' px-[8px] py-[7px] md:px-[15px] md:py-[10px]  flex uppercase justify-center items-center font-[400] lg:font-[600] 3xl:font-[600] text-[8px] lg:text-[12px] 3xl:text-[18px] text-white not-italic rounded-[30px] lg:rounded-[50px] navbar-button lg:px-[30px] lg:py-[20px] 3xl:px-[35px] 3xl:py-[24px] 3xl:leading-[16px] '>comprar boletos</button>
    </div>
   </div>
   </div>
   </>
  )
}
