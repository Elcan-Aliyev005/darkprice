import React from 'react'
import UserForm from '../../../components/layout/admin/UserForm'
import Title from '../../../components/layout/admin/Title'

function CreateUser() {
    return (
        <div className='w-full'>
            <Title title={"Create a new User"}/>
            <div className='p-[50px]'>
                <UserForm />

            </div>
        </div>
    )
}

export default CreateUser