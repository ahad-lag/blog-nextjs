

const SideBar = () => {
    return(
        <>
            <div className='break-all bg-white dark:bg-dark-890 sm:px-5 sm:py-5 p-5 rounded shadow-md ml-4 mb-4'>
                <div className='font-bold text-xl text-center transition duration-200  dark:hover:text-blue-450 hover:text-blue-700 text-gray-800 overflow-hiddenfont-bold overflow-hidden'>دسته بندی ها</div>
                <hr className='my-3'/>
                <div className='flex flex-wrap items-center'>
                    <button
                    type="button"
                    className="bg-gray-300 dark:bg-dark-890 dark:shadow-whiteShadow dark:text-gray-920 hover:bg-gray-400 text-sm h-7 pb-1 hover:text-white flex font-medium pt-1.5  items-center px-3 rounded text-biscay-700 "
                    >
                    لاراول
                    </button>
                </div>
            </div>
            <div className='break-all bg-white dark:bg-dark-890 sm:px-5 sm:py-5 p-5 rounded shadow-md ml-4 mb-4'>
                <div className='font-bold text-xl text-center transition duration-200  dark:hover:text-blue-450 hover:text-blue-700 text-gray-800 overflow-hiddenfont-bold overflow-hidden'>ناشران</div>
                <hr className='my-3'/>
                <div className='flex flex-wrap items-center'>
                    <button
                    type="button"
                    className="bg-gray-300 dark:bg-dark-890 dark:shadow-whiteShadow dark:text-gray-920 hover:bg-gray-400 text-sm h-7 pb-1 hover:text-white flex font-medium pt-1.5  items-center px-3 rounded text-biscay-700 "
                    >
                    احد لگ
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar;