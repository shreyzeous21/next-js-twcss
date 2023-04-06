import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build With <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span>
            by&nbsp;<Link href="https://github.com/shreyzeous21" className='underline font-bold underline-offset-2' target={"_blank"}>shrey</Link>
            </div>
            <Link href="https://github.com/shreyzeous21" className='underline underline-offset-2' target={"_blank"}>say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer