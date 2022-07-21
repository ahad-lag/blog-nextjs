import Image from 'next/image'
import Link from "next/link";

const Header = () => {
    return(
        <div className='flex items-center justify-between bg-white sm:px-11 sm:py-5 p-5 rounded shadow-md'>
            <Link href='/'>
                <Image src="/img/logo.png" alt="Blog Logo" width={51} height={51} />
            </Link>
            <div className='sm:w-3/4'>
                <div className="relative rounded-md shadow-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <Link href='/panel'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </Link>
                    </div>
                    <input
                        type="text"
                        name="todo"
                        placeholder="دنبال چی میگردی؟!"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                    پنل مدیریت
                </button>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-rose-700 bg-rose-100 hover:bg-rose-200 mr-2"
                    >
                    خروج
                </button>
            </div>
        </div>
    )
}

export default Header;