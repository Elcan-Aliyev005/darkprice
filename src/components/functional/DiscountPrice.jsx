import { Button, Form, InputNumber } from 'antd';
import React from 'react'

function DiscountPrice() {
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            className='w-full flex flex-col gap-[40px]'
            onFinish={(values) => console.log('Form Submitted:', values)} 
            onFinishFailed={(values) => console.log('Form Submitted:', values)} 
            initialValues={{ discount: 0.01 }}

        >
      
            <Form.Item
                className='parameter'
                label='Endirim məbləği'

                name="discount"
                rules={[
                    { required: true, message: 'Zəhmət olmasa endirim məbləğini daxil edin!' },
                    { pattern: /^[1-9]\d*$/, message: 'Yalnız müsbət tam ədədi dəyər daxil edin!' }
                ]}
            >
                <InputNumber
                                defaultValue={1} type='number' placeholder='faiz' />
            </Form.Item>

            <Button type='primary' htmlType='submit' className='mt-[15px] w-full'>
                Dəyişdir
            </Button>
        </Form>
    );
}

export default DiscountPrice