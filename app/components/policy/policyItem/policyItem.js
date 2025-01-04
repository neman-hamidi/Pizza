import React from 'react'
import "./policyItem.css"
export default function policyItem({ children, title, desc,dir }) {
  return (
    <div className={`flex gap-16 justify-center items-center ${dir ? "direction" :""} `}>
        <div>
            <div className='flex items-start w-fit justify-center p-2'>
                {children}
            </div>
        </div>
        <div className={`text-white ${dir ? "direction-rtl" :""}`}>
            <p className='mb-10 text-4xl font-bold'>{title}</p>
            <p className='text-2xl text-justify font-vazir-light w-[700px] leading-10'>{desc}</p>
        </div>
    </div>
  )
}
