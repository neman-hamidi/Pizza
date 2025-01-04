import React from 'react'
import Image from 'next/image'
import { FiInstagram } from "react-icons/fi";
import "./footer.css"
export default function footer() {
  return (
    <footer className='w-full h-[504px] relative'>
        <div className='div-footer'></div>
        <div className='absolute top-20 text-white w-full flex justify-around items-center z-10'>
            <div className='text-white -translate-y-7'>
                <Image src="/images/logo 1.png" width={107} height={121} alt='logo-footer'/>
                <p className='font-bold text-2xl'>مجموعه پذیرایی شبدیز</p>
                <p className='text-lg mt-5 '>یک تکه از زندگی را تقسیم کنیم </p>
            </div>
            <div className='flex justify-center items-center gap-28'>
                <div>
                    <ul>
                        <li className='font-bold before:w-3 before-item'>دسترسی سریع</li>
                        <li className='font-vazir-light mt-2'>مـــــنو ما</li>
                        <li className='font-vazir-light mt-2'>شـــعب  ما</li>
                        <li className='font-vazir-light mt-2'>راهـــنمای رزرو</li>
                        <li className='font-vazir-light mt-2'>ارتـــباط با ما</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold before:w-3 before-item'>خدمات مشتریان</li>
                        <li className='font-vazir-light mt-2'>مرکز پشتیبانی آنلاین</li>
                        <li className='font-vazir-light mt-2'>قوانین و مقررات</li>
                        <li className='font-vazir-light mt-2'>حریم خصوصی</li>
                        <li className='font-vazir-light mt-2'>سوالات متداول</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold before:w-3 before-item'>لینک های مفید</li>
                        <li className='font-vazir-light mt-2'>باشگاه مشتریان</li>
                        <li className='font-vazir-light mt-2'>همکاری با ما</li>
                        <li className='font-vazir-light mt-2'>فرصت های شغلی</li>
                        <li className='font-vazir-light mt-2'>تخفیف ها</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold before:w-3 before-item mb-4'>اعتماد شما سرمایه ماست</li>
                        <div className='flex gap-4'>
                            <Image src="/images/zarinpal-badge 1.png" width={75} height={107} alt='footer-support' className='rounded-lg'/>
                            <Image src="/images/enamad.png" width={107} height={107} alt='footer-support' className='rounded-lg'/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-main rounded-lg py-3.5 px-5 flex items-center justify-between w-11/12 mx-auto absolute bottom-20 right-16 z-10'>
            <div className='bg-white text-white rounded-lg relative '>
                <input type="text" className='w-96 p-2 px-3 rounded-lg outline-none' placeholder='شماره موبایل' />
                <button type="submit" className='bg-main py-1 px-3 text-xs absolute left-4 top-2 rounded-md' >عضویت در خبرنامه</button>
            </div>
            <div className='flex gap-2 items-center justify-center text-white'>
                <p>instagram@</p>
                <FiInstagram className='w-8 h-8'/>
            </div>
        </div>
        <div className='absolute bottom-[30px] right-24 text-white'>
            <p>کلیه حقوق مادی و معنوی سایت نزد رستوران شبدیز محفوظ است</p>
        </div>
    </footer>
  )
}
