import Link from "next/link";


const LikesListItem = ({ indexRowItem , article }) => {
    return(
        <tr >
            <td className="font-bold whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-800 sm:pl-6">
                {indexRowItem}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <Link href={article.article_url}>
                    <a className="font-bold transition duration-200 dark:hover:text-blue-450 hover:text-indigo-700 text-gray-800">
                        {article.article}
                    </a>
                </Link>
            </td>
            <td className="font-bold whitespace-nowrap px-3 py-4 text-sm text-gray-800">{article.user}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button
                    type="button"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default LikesListItem;