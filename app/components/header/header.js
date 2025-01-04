import React from 'react'
import Image from 'next/image'
import "./header.css"
export default function header() {
  return (
    <header className='z-40 relative'>
        <div className='header-div mx-auto bg-black'>
            <div className='h-[1000px] overflow-hidden'>
                <div className='absolute right-36'>
                    <Image src="/images/top-header.png" width={1400} height={1400} alt='img'/>
                </div>
                <div className='text-center text-white mb-48 mt-8'>
                    <p className='text-5xl mb-5'>پــیتزا شـــــــبدیذ</p>
                    <p className='text-xl'>یک تکه از زندگی را با هم تقسیم کنیم</p>
                </div>
                <div className='border border-white rounded-full p-20  w-[1440px] h-[1440px] mx-auto relative'>
                    <div className='flex justify-center items-start'>
                    <Image src="/images/pizza.png" width={1200} height={1200} alt='product-img' className='img-shadow'/>
                    </div>
                    {/* Circle White */}
                    <div className='w-3 h-3 bg-white rounded-full absolute top-52 right-[200px]'></div>
                    <div className='w-3 h-3 bg-white rounded-full absolute top-20 right-[370px]'></div>
                    <div className='w-3 h-3 bg-white rounded-full absolute top-4 right-[530px]'></div>

                    <div className='w-3 h-3 bg-white rounded-full absolute top-52 left-[200px]'></div>
                    <div className='w-3 h-3 bg-white rounded-full absolute top-20 left-[370px]'></div>
                    <div className='w-3 h-3 bg-white rounded-full absolute top-4 left-[530px]'></div>
                    
                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[40px] right-[50px] rotate-45'>
                            <Image src="/images/gosht.png" width={130} height={116} alt='img-product' className='mb-4' />
                            <p className="text-2xl">گوشت</p>
                        </div>
                    </div>
                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[-90px] right-[245px] rotate-[37deg]'>
                            <Image src="/images/morgh.png" width={120} height={116} alt='img-product' className='mb-4' />
                            <p className="text-2xl">مرغ</p>
                        </div>
                    </div>
                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[-180px] right-[420px] rotate-[25deg]'>
                            <Image src="/images/bacon.png" width={150} height={190} alt='img-product' className='mb-4' />
                            <p className="text-2xl -translate-y-7">بیکن</p>
                        </div>
                    </div>

                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[-160px] left-[400px] -rotate-[20deg]'>
                            <Image src="/images/pepperoni 3.png" width={209} height={116} alt='img-product' className='mb-4' />
                            <p className="text-2xl -translate-y-8">پپرونی</p>
                        </div>
                    </div>

                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[-80px] left-[245px] -rotate-[35deg]'>
                            <Image src="/images/red-peppers.png" width={140} height={116} alt='img-product' className='mb-4' />
                            <p className="text-2xl -translate-y-8">فلفل</p>
                        </div>
                    </div>

                    <div className='w-32 h-32 text-center text-white'>
                        <div className='absolute top-[80px] left-[80px] -rotate-[45deg]'>
                            <Image src="/images/panir-pitzza.png" width={110} height={116} alt='img-product' className='mb-4' />
                            <p className="text-2xl  -translate-y-5">پنیر پیتزا</p>
                        </div>
                    </div>
                        
                    
                    
                </div>
               
               
            </div>
        </div>
    </header>
  )
}
