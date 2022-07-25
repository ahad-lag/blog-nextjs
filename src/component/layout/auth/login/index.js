import { useState } from "react";
import Link from "next/link";
import Input from "../../general/input";
import Button from "../../general/button";

const LoginIndex = () => {

    const [ inputs ,setInputs ] = useState({
        userName : '',
        passWord : ''
    })

    const chengeInputHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const loginUserHandler = () => {
        null
    }

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">وارد شوید</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div onSubmit={loginUserHandler}>
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
        </>
    )
}

export default LoginIndex;