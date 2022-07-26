import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { loginUser } from "../../../../store/slices/authSlice";
import Input from "../../general/input";
import Button from "../../general/button";
import WarningModal from "../../general/modal/warningModal";

const LoginIndex = ({ router }) => {

    const dispatch = useDispatch();

    const [ inputs ,setInputs ] = useState({
        userName : '',
        passWord : ''
    })
    const [ validateModal , setValidateModal] = useState({
        text : 'هشدار',
        type : 'warning',
        status : false
    })

    const chengeInputHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const loginUserHandler = async (e) => {
        e.preventDefault();
        if(! inputs.userName){
            setValidateModal({
                text : 'لطفا نام کاربری خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.passWord){
            setValidateModal({
                text : 'لطفا کلمه عبور خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else{
            let res = await axios.post('http://127.0.0.1:8000/api/login',inputs,{Accept: 'application/json'});
            if(res.data.status == "error"){
                setValidateModal({
                    text : res.data.Message,
                    type : 'error',
                    status : true
                });
            }else{
                dispatch(loginUser(res.data));
                router.push('/');
            }
        }
    }

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">وارد شوید</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6"  onSubmit={loginUserHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            ایمیل
                            </label>
                            <div className="mt-1">
                                <Input 
                                    name='userName'
                                    type='text'
                                    value={inputs.userName}
                                    placeholder='نام کاربری را وارد کنید'
                                    onChenge={chengeInputHandler}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                رمزعبور
                                (شماره تلفن)
                            </label>
                            <div className="mt-1">
                                <Input 
                                    name='passWord'
                                    type='password'
                                    value={inputs.passWord}
                                    placeholder='کلمه عبور را وارد کنید'
                                    onChenge={chengeInputHandler}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                            <Link href="/auth/register">
                                <a className="font-medium text-indigo-600 hover:text-indigo-500">عضو نیستم, میخوام ثبت نام کنم</a>
                            </Link>
                            </div>
                        </div>

                        <div>
                            <Button
                                type='submit'
                                text='ورود'
                                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            />
                        </div>
                    </form>
                </div>
            </div>
            {
                validateModal.status && <WarningModal 
                                    showModal={validateModal.status}
                                    setShowModal={setValidateModal}
                                    text={validateModal.text}
                                    type={validateModal.type}
                                />
            }
        </>
    )
}

export default LoginIndex;