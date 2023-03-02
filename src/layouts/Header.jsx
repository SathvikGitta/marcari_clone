import React from 'react'
import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <div className="header-container bg-transparent h-24">
                <nav>
                    <ul className='flex justify-between items-center px-6 text-white h-24 font-semibold'>
                        <div className="left-container flex items-center">
                            <Link className='text-3xl'>MERCARI</Link>
                            <Link className='px-4'>shop by marketplace</Link>
                        </div>
                        <div className="right-container flex items-center">
                            <Link className='px-2'>Get the app</Link>
                            <Link className='px-2'>Sign up</Link>
                            <Link className='px-2'>Log in</Link>

                            <div className="right-container-additional_items ">
                                <Link className='px-2 border-l-2'>Bello</Link>
                                <Link className='px-2'>Cart</Link>
                                <button className='bg-white text-black text-2x px-[10px] py-[5px] mx-3 rounded-md'>List an item</button>
                            </div>
                        </div>
                    </ul>
                </nav>

                {/* Container */}
                <section className="section-container flex flex-col justify-center items-center h-[80vh]">
                    <h1 className='w-[40%] leading-[145%] text-white text-5xl font-bold'>Make Secondhand first choice</h1>
                    <div className="search-container mt-3 w-2/5 bg-white flex justify-center items-center rounded-md">
                        <input type="search" name="search-input-value" id="SearchInput" className='w-[350px] h-[40px] outline-none text-black text-xl px-[10px]' />
                        <button className='text-xl text-white p-2 bg-black '>search</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Header