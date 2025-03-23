import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { Api } from '../../../axios/api';
const { Option } = Select;
const UserForm = () => {

    const nameRef = useRef()
    const snameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()
    const phoneRef = useRef()
    const [isAdmin, setAdmin] = useState(false)

    const setIsAdmin = (value) => {
        setAdmin(value)
        console.log(value);


    }



    const createUser = async () => {


        try {
            const data = await Api.post("/api/auth/register",
                {
                    name: nameRef.current.input.value.trim(),
                    sname: snameRef.current.input.value,
                    password: passwordRef.current.input.value,
                    email: emailRef.current.input.value,
                    username: usernameRef.current.input.value,
                    phone: phoneRef.current.input.value,
                    isAdmin: isAdmin,
                    isActive: true,
                }
            )
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <>
            <Form
                layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item

                            className='!text-[#fff]'
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user name',
                                },
                            ]}
                        >
                            <Input ref={nameRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="sname"
                            label="Surname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user name',
                                },
                            ]}
                        >
                            <Input ref={snameRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>


                </Row>
                <Row gutter={16}>

                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user email',
                                },
                            ]}
                        >
                            <Input ref={emailRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user email',
                                },
                            ]}
                        >
                            <Input ref={passwordRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user name',
                                },
                            ]}
                        >
                            <Input ref={usernameRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="phone"
                            label="Phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user name',
                                },
                            ]}
                        >
                            <Input ref={phoneRef} className='!py-[10px] !px-[20px]' placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={16}>
                        <Form.Item
                            name="isAdmin"
                            label="Role"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select an owner',
                                },
                            ]}
                        >
                            <Select onChange={setIsAdmin} placeholder="Please select an owner">
                                <Option value={true}>Admin</Option>
                                <Option value={false}>User</Option>
                            </Select>
                        </Form.Item>
                        <Button onClick={createUser} type='primary' >Create</Button>
                    </Col>

                </Row>

            </Form>
        </>
    );
};
export default UserForm;