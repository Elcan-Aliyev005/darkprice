import React from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryModal } from '../../../store/layout';

const HistoryModal = () => {
    const { historyModal } = useSelector(store => store.layout)
    const dispatch = useDispatch()

   
    const setClose = () => {
        dispatch(setHistoryModal(false))
    }
    
    return (
        <>
            <Modal
                className='!w-[700px] history-modal'
                title={<p>Tarixçə</p>}
                footer={
                    <Button type="primary" onClick={() => { }}>
                        Reload
                    </Button>
                }
                open={historyModal}
                onCancel={setClose}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default HistoryModal;