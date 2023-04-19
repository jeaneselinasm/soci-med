import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GoogleLogin} from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import Logo from "../utils/logo.png"
import Image from "next/legacy/image"
const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow sm'>
      <div className='py-4 border-b-[1px]'>
      <Link href="/">
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
        <Image alt='Logo'
        className='hidden md:block cursor-pointer'
        height='100'
        width='100'
        src={Logo}
        />
        </div>
      </Link>

      </div>

    </div>
  )
}

export default Navbar
