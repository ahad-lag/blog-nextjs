import PanelSideBar from "./panel-side-bar";

const MasterPanelPage = ({ page , children }) => {
    return(
        <div className='flex my-4'>
            <div className='sm:basis-1/5'>

                <PanelSideBar page={page} />

            </div>
            <div className='sm:basis-4/5'>
                <div className='break-words bg-white dark:bg-dark-890 sm:px-5 sm:py-5 p-5 rounded shadow-md'>

                    { children }

                </div>
            </div>
        </div>
    )
}

export default MasterPanelPage;