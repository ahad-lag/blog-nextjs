import MasterPanelPage from "../masterPanelPage";
import ProfileForm from "./profileForm";

const ProfilePage = () => {
    return(
        <MasterPanelPage page='profile'>
            <div className="sm:flex sm:items-center mb-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">ویرایش پروفایل</h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:flex-none">
                    {/* - */}
                </div>
            </div>

            <ProfileForm />

        </MasterPanelPage>
    )
}

export default ProfilePage;