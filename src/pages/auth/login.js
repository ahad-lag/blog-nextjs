import {useRouter} from 'next/router'
import { useEffect } from 'react';
import LoginIndex from '../../component/layout/auth/login';

const LoginPage = props => {
    const router = useRouter();
    const auth = props.checkAuth();
    useEffect(() => {
        if(auth){
            router.push('/')
        }
    },[]);
    return <LoginIndex router={router} />
}

export default LoginPage;