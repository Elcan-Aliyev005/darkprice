import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryModal, setOffCanvas } from '../../../store/layout';
const OffCanvas = () => {
    const dispatch = useDispatch()
    const { offCanvas } = useSelector(store => store.layout)
    const { name } = useSelector(store => store.store)
    console.log(name);


    const onClose = () => {
        dispatch(setOffCanvas(false))
    };

    const openHistoryModal = () => {
        dispatch(setHistoryModal(true))
    }

    return (
        <>

            <Drawer
                width={450}
                title={<h3 className='px-[10px] text-[18px]'>{name}</h3>}
                className='!bg-[#1b1b1e]  text-[#fff]'
                onClose={onClose} open={offCanvas}>
                <div className='flex flex-col gap-[20px] w-full'>
                    <Button type='primary' className=' ' onClick={openHistoryModal}>
                        Tarixcə
                    </Button>
                </div>
            </Drawer>
        </>
    );
};
export default OffCanvas;