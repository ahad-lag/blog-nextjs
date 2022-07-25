import Image from 'next/image'

const ArticleBox = () => {
    return(
        <div className='p-4 flex flex-col dark:bg-dark-930 bg-white rounded h-96 shadow-md'>
            <Image src='/img/post.jpg' className='lozad w-full h-full object-cover transform transition duration-200 hover:scale-110' height={160} width={250}/>
            <h4 className='font-bold text-xl text-justify transition duration-200  dark:hover:text-blue-450 hover:text-indigo-700 text-gray-800 overflow-hidden my-4'>تیتر یک</h4>
            <p className='text-ellipsis overflow-hidden break-words'>ین محصول قابل استفاده در توالت‌های عمومی و خانگی می‌باشد. ین محصول قابل استفاده در توالت‌های عمومی و خانگی می‌باشد.140</p>
            <hr className='my-3'/>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>
                    نویسنده : احد لگ
                </div>
                <div className='flex justify-between items-center'>
                    <button
                        type="button"
                        className="bg-gray-300 dark:bg-dark-890 dark:shadow-whiteShadow dark:text-gray-920 hover:bg-gray-400 text-sm h-7 pb-1 hover:text-white flex font-medium pt-1.5  items-center px-3 rounded text-biscay-700"
                    >
                        لاراول
                    </button>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-800 fill-current mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox;