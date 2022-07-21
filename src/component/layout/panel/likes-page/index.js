import MasterPanelPage from "../masterPanelPage";
import LikesList from "./likesList";


const LikesIndex = () => {
    return(
        <MasterPanelPage page='likes'>
            <div className="sm:flex sm:items-center mb-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">لیست کاربران</h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => setShow(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        کاربر جدید
                    </button>

                    {/*Add modal Component*/}
                    {/*<Modal*/}
                    {/*    show={show}*/}
                    {/*    setShow={setShow}*/}
                    {/*>*/}
                    {/*    ahad*/}
                    {/*</Modal>*/}

                </div>
            </div>
            <LikesList />
        </MasterPanelPage>
    )
}

export default LikesIndex;