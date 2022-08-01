import {useRouter} from 'next/router'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RegisterIndex from '../../component/layout/auth/register';

const RegisterPage = props => {
    const router = useRouter();
    const is_auth = useSelector(state => state.auth.is_auth);
    useEffect(() => {
        if(is_auth){
            router.push('/')
        }
    },[]);
    return <RegisterIndex router={router} />
}

export default RegisterPage;