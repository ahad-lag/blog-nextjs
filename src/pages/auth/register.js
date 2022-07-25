import {useRouter} from 'next/router'
import { useEffect } from 'react';
import RegisterIndex from '../../component/layout/auth/register';

const RegisterPage = props => {
    const router = useRouter();
    const auth = props.checkAuth();
    useEffect(() => {
        if(auth){
            router.push('/')
        }
    },[]);
    return <RegisterIndex />
}

export default RegisterPage;