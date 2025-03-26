import { Button, Form, Input } from 'antd'
import React from 'react'

function PriceHandler() {
    const [form] = Form.useForm()
    return (
        <Form
            form={form}
            className='w-full flex flex-col gap-[40px]'
            onFinish={(values) => console.log('Form Submitted:', values)}
            onFinishFailed={(values) => console.log('Form Submitted:', values)}
        >
            <Form.Item
                className='parameter'
                label='Faiz (%)'
                name="ww"
                rules={[{ required: true, message: 'Zəhmət olmasa bir dəyər daxil edin!' }]}
            >
                <div><Input id='percent' placeholder='faiz' /></div>
            </Form.Item>

            <Button
                type='primary'
                htmlType='submit'
                className='mt-[25px] w-full'
            >
                Dəyişdir
            </Button>

        </Form>
    )
}

export default PriceHandler