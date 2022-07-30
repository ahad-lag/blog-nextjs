import {useRouter} from 'next/router'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginIndex from '../../component/layout/auth/login';

const LoginPage = () => {
    const router = useRouter();
    const is_auth = useSelector(state => state.auth.is_auth);
    useEffect(() => {
        if(is_auth){
            router.push('/')
        }
    },[]);
    return <LoginIndex router={router} />;
}

export default LoginPage;