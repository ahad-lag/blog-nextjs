import ArticleBox from './ArticleBox';
import AdminSideBar from './adminSideBar';

const MainAdminPage = () => {
    return(
        <div className='flex my-4'>
            <div className='sm:basis-1/5'>

                <AdminSideBar />
                
            </div>
            <div className='sm:basis-4/5'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-4 sm:gap-4 sm:gap-y-4 gap-y-8'>

                    <ArticleBox />
                
                </div>
            </div>
        </div>
    )
}

export default MainAdminPage;