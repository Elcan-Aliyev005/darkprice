import React from 'react'
import Title from '../../../components/layout/admin/Title'
import StoreForm from '../../../components/layout/admin/StoreForm'

function CreateStore() {
    return (
        <div className='w-full'>
            <Title title={"Create a new Store"}/>
            <div className='p-[50px]'>
                <StoreForm />
            </div>
        </div>
    )
}

export default CreateStore