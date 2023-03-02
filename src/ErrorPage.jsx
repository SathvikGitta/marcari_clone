import React from 'react'

import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const ErrorRouter = useRouteError();
    return (
        <>
            <div className="w-screen h-screen bg-BgImage bg-no-repeat bg-center text-white font-bold text-6xl flex items-center justify-center flex-col">
                <h2>Oops Something Went Wrong </h2>
                <h4 className='py-[25px]'>Page {ErrorRouter.statusText || ErrorRouter.message} 😥</h4>
                <button>
                </button>
            </div>
        </>
    )
}

export default ErrorPage