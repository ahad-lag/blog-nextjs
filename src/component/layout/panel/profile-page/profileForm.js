import { useState } from "react";
import Input from "../../general/input";
import WarningModal from "../../general/modal/warningModal";


const ProfileForm = () => {

    const [ validateModal , setValidateModal] = useState({
        text : 'هشدار',
        type : 'warning',
        status : false
    });

    return(
        <form onSubmit={null}>
            <div className="flex">
                <div className="basis-1/2">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700 mb-2">
                        نام
                    </label>
                    <Input
                        name='firstName'
                        type='text'
                        value={'inputs.repeatPassword'}
                        placeholder='نام را وارد کنید'
                        onChenge={null}
                    />
                </div>
                <div className="basis-1/2 mr-3">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700 mb-2">
                        نام خانوادگی
                    </label>
                    <Input
                        name='lastName'
                        type='text'
                        value={'inputs.lastName'}
                        placeholder='نام خانوادگی را وارد کنید'
                        onChenge={null}
                    />
                </div>
            </div>
            <div className="flex">
                <div className="basis-1/3">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700 mb-2">
                        شماره همراه
                    </label>
                    <Input
                        name='phone'
                        type='text'
                        value={'inputs.phone'}
                        placeholder='شماره همراه را وارد کنید'
                        onChenge={null}
                    />
                </div>
                <div className="basis-1/3">email</div>
                <div className="basis-1/3">user neme</div>
            </div>
            <div className="flex">
                <div className="basis-1/2">password</div>
                <div className="basis-1/2">password agine</div>
            </div>
            {
            validateModal.status && <WarningModal 
                                showModal={validateModal.status}
                                setShowModal={setValidateModal}
                                text={validateModal.text}
                                type={validateModal.type}
                            />
            }
        </form>
    )
}

export default ProfileForm;