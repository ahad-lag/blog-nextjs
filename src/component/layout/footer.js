
const Footer = () => {
    return(
        <div className='flex items-center justify-between bg-indigo-50 sm:px-11 sm:py-5 p-5 rounded shadow-md mb-4'>
            <div className='flex'>
                <div>ساخته شده با</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-800 fill-current mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div>توسط احد لگ</div>
            </div>
            <div>
                <ul className='flex items-center justify-between'>
                <li className='ml-2'>
                <button
                    type="button"
                    className="bg-indigo-300 dark:bg-dark-890 dark:shadow-whiteShadow dark:text-gray-920 hover:bg-indigo-400 h-7 pb-1 hover:text-white flex pt-1.5  items-center px-3 rounded text-biscay-700"
                >
                    تماس با‌ ما
                </button>
                </li>
                <li>
                <button
                    type="button"
                    className="bg-indigo-300 dark:bg-dark-890 dark:shadow-whiteShadow dark:text-gray-920 hover:bg-indigo-400 h-7 pb-1 hover:text-white flex pt-1.5  items-center px-3 rounded text-biscay-700"
                >
                    درباره ما
                </button>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;