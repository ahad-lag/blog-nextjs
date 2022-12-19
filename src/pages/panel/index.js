import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import MasterPage from "../../component/layout/masterPage"
import ProfilePage from "../../component/layout/panel/profile-page";


const Admin = () => {
    const router = useRouter();
    const is_auth = useSelector(state => state.auth.is_auth);
    useEffect(() => {
        if(! is_auth){
            router.push('/')
        }
    },[]);
    return(
        <MasterPage>
            <ProfilePage />
        </MasterPage>
    )
}

export default Admin;