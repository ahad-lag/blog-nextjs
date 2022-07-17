
const navigation = [
    { name: 'داشبورد', href: '#', icon: HomeIcon, current: false },
    { name: 'تیم', href: '#', icon: UsersIcon, current: true },
    { name: 'پروژه', href: '#', icon: FolderIcon, current: false },
    { name: 'تقویم', href: '#', icon: CalendarIcon, current: false },
    { name: 'اسناد', href: '#', icon: InboxIcon, current: false },
    { name: 'گزارشات', href: '#', icon: ChartBarIcon, current: false },
  ]

const HomeSideBar = () => {
    return(
        <div className='bg-white dark:bg-dark-890 sm:px-5 sm:py-5 p-5 rounded shadow-md mb-4 ml-5'>
            <nav className="space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className={classNames(
                    item.current ? 'bg-indigo-100 text-gray-900 border border-indigo-600' : 'text-gray-600 hover:bg-indigo-100 hover:text-gray-900',
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                <item.icon
                    className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'flex-shrink-0 ml-2 h-6 w-6'
                    )}
                    aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
                </a>
            ))}
            </nav>
        </div>
    )
}

export default HomeSideBar;