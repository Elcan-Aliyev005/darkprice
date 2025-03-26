import React from 'react';
import LimitSelect from './limitSelect';
import { Button, Form, Input, InputNumber } from 'antd';

function LimitHandler() {
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            className='w-full flex flex-col gap-[40px]'
            onFinish={(values) => console.log('Form Submitted:', values)} 
            onFinishFailed={(values) => console.log('Form Submitted:', values)} 
        >
            <Form.Item
                className='parameter'
                label='Məhsul seçin'
                name="product"
                rules={[
                    {
                        required: true,
                        message: '',
                        validator: (_, value) => Promise.resolve(), // Valideyşn etmir
                    },
                ]}
            >
                <LimitSelect />
            </Form.Item>

            <Form.Item
                className='parameter'
                label='Faiz (%)'
                name="percent"
                rules={[
                    { required: true, message: 'Zəhmət olmasa faiz daxil edin!' },
                    { pattern: /^[1-9]\d*$/, message: 'Yalnız müsbət tam ədədi dəyər daxil edin!' }
                ]}
            >
                <InputNumber type='number' placeholder='faiz' />
            </Form.Item>

            <Button type='primary' htmlType='submit' className='mt-[15px] w-full'>
                Dəyişdir
            </Button>
        </Form>
    );
}

export default LimitHandler;
