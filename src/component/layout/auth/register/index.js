import { useState } from "react";
import Link from "next/link";
import Input from "../../general/input";
import Button from "../../general/button";

const RegisterIndex = () => {

    const [ inputs ,setInputs ] = useState({
        firstName : '',
        lastName : '',
        phone : '',
        email : '',
        userName : '',
        password : ''
    })

    const chengeInputHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
        console.log(e.target.name,e.target.value);
    }

    const registerUserHandler = () => {
        null
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
                            name='passWord'
                            type='password'
                            value={inputs.passWord}
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
        </>
    )
}

export default RegisterIndex;
