import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import Input from "../../general/input";
import Button from "../../general/button";
import WarningModal from "../../general/modal/warningModal";
import { loginUser } from "../../../../store/slices/authSlice";

const RegisterIndex = ({ router }) => {

    const dispatch = useDispatch();

    const [ inputs ,setInputs ] = useState({
        firstName : '',
        lastName : '',
        phone : '',
        email : '',
        userName : '',
        password : '',
        repeatPassword : ''
    });
    const [ validateModal , setValidateModal] = useState({
        text : 'هشدار',
        type : 'warning',
        status : false
    })

    const chengeInputHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    }

    const registerUserHandler = async (e) => {
        e.preventDefault();
        if(! inputs.firstName){
            setValidateModal({
                text : 'لطفا نام خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.lastName){
            setValidateModal({
                text : 'لطفا نام خانوادگی خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.phone){
            setValidateModal({
                text : 'لطفا تلفن همراه خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.email){
            setValidateModal({
                text : 'لطفا ایمیل خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.userName){
            setValidateModal({
                text : 'لطفا نام کاربری خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.password){
            setValidateModal({
                text : 'لطفا رمز عبور خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else if(! inputs.repeatPassword){
            setValidateModal({
                text : 'لطفا تکرار رمز عبور خود را وارد کنید',
                type : 'warning',
                status : true
            });
        }else{
            if(inputs.password === inputs.repeatPassword){
                let res = await axios.post('http://127.0.0.1:8000/api/register',inputs,{Accept: 'application/json'});
                console.log(res);
                if(res.data.status == "success"){
                    dispatch(loginUser(res.data));
                    router.push('/');
                }else if(res.data.status == "error"){
                    setValidateModal({
                        text : res.data.Message,
                        type : 'error',
                        status : true
                    });
                }
            }else{
                setValidateModal({
                    text : 'رمزعبور مطابقت ندارد',
                    type : 'warning',
                    status : true
                });
            }
        }
    }

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">عضو شوید</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={registerUserHandler}>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            نام
                        </label>
                        <Input 
                            name='firstName'
                            type='text'
                            value={inputs.firstName}
                            placeholder='نام را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            نام خانوادگی
                        </label>
                        <Input 
                            name='lastName'
                            type='text'
                            value={inputs.lastName}
                            placeholder='نام خانوادگی را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            تلفن همراه 
                        </label>
                        <Input 
                            name='phone'
                            type='number'
                            value={inputs.phone}
                            placeholder='تلفن همراه را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            ایمیل
                        </label>
                        <Input 
                            name='email'
                            type='email'
                            value={inputs.email}
                            placeholder='ایمیل را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            نام کاربری
                        </label>
                        <Input 
                            name='userName'
                            type='text'
                            value={inputs.userName}
                            placeholder='نام کاربری را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            کلمه عبور
                        </label>
                        <Input 
                            name='password'
                            type='password'
                            value={inputs.password}
                            placeholder='کلمه عبور را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            تکرار کلمه عبور
                        </label>
                        <Input 
                            name='repeatPassword'
                            type='password'
                            value={inputs.repeatPassword}
                            placeholder='کلمه عبور را وارد کنید'
                            onChenge={chengeInputHandler}
                        />
                    </div>
                    <div className="text-sm  my-4">
                        <Link href="/auth/login">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500">قبلا عضو شدم, میخوام وارد شم</a>
                        </Link>
                        </div>

                    <div>
                        <Button
                            type='submit'
                            text='عضویت'
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

export default RegisterIndex;
