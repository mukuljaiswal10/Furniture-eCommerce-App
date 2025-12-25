import Link  from 'next/link'
import React from 'react'

export default function Breadcrumb({title}) {
  return (
    <>
    <section className='py-10'>
        <h1 className='text-center font-bold text-4xl'>{title}</h1>
        <div className='text-center py-1'>
            <Link href={"/"} className='hover:text-[#C09578]'>Home</Link> &nbsp; {'>'} &nbsp;
            <span className='text-[#C09578]'>{title}</span>
        </div>
    </section>
    </>
  )
}
