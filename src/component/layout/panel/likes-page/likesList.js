import LikesListItem from "./likesListItem";

const likesList = [
    {
        "like_id": 1,
        "user": "ahad lag",
        "article_id": 1,
        "article": "title 1"
    },
    {
        "like_id": 2,
        "user": "agha reza",
        "article_id": 23,
        "article": "title 23"
    }
];

const LikesList = () => {
    return(
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-3 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg border-2 border-violet-200">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        ردیف
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نام مقاله
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نویسنده
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                    likesList.map((index , like_id , article_id , article , user) => <LikesListItem index={index} article_id={article_id} article={article} like_id={like_id} user={user} key={like_id}/>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikesList;