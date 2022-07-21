import Link from "next/link";
import { CollectionIcon, HeartIcon, DocumentTextIcon, IdentificationIcon, UsersIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'profile', lable: 'پروفایل', href: '/panel', icon: IdentificationIcon},
    { name: 'likes', lable: 'پسندیده شده', href: '/panel/likes', icon: HeartIcon},
    { name: 'articles', lable: 'مقالات', href: '/panel/articles', icon: DocumentTextIcon},
    { name: 'users', lable: 'کاربران', href: '/panel/users', icon: UsersIcon},
    { name: 'categories', lable: 'دسته بندی ها', href: '/panel/categories', icon: CollectionIcon},
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const PanelSideBar = ({ page }) => {
    return(
        <div className='bg-white dark:bg-dark-890 sm:px-5 sm:py-5 p-5 rounded shadow-md ml-5'>
            <nav className="space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} replace>
                    <a
                        className={classNames(
                            item.name === page ? 'bg-indigo-100 text-gray-900 border border-indigo-600' : 'text-gray-600 hover:bg-indigo-100 hover:text-gray-900',
                            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                        )}
                        aria-current={item.name === page ? 'page' : undefined}
                    >
                        <item.icon
                            className={classNames(
                                item.name === page ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'flex-shrink-0 ml-2 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        <span className="truncate">{item.lable}</span>
                    </a>
                </Link>
            ))}
            </nav>
        </div>
    )
}

export default PanelSideBar;