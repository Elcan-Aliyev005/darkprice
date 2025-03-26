import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { Api } from '../../../axios/api';
import TextArea from 'antd/es/input/TextArea';
import { getAllUsers } from '../../../services/admin/user/getAllUsers';
import { nanoid } from 'nanoid';
const { Option } = Select;
const StoreForm = () => {


    const nameRef = useRef()
    const storeTokenRef = useRef()
    const storeIdRef = useRef()
    const [userId, setUserId] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const users = await getAllUsers()
            setUsers(users);
            console.log(users);
        })()
    }, [])


    const setOwner = (value) => {
        setUserId(value)
        console.log(value);
    }


    const createStore = async () => {

        // console.log({
        //     name: nameRef.current.input.value.trim(),
        //     storeId: storeIdRef.current.input.value.trim(),
        //     storeToken: storeTokenRef.current.input.value.trim(),
        //     userId: userId,
        // });
        console.log({
            name: nameRef.current.input.value.trim(),
            storeId: storeIdRef.current.input.value.trim(),
            storeToken: storeTokenRef.current.resizableTextArea.textArea.value.trim(),
            userId: userId,
        });

        try {
            const data = await Api.post("/api/db/create-store",
                {
                    name: nameRef.current.input.value.trim(),
                    storeId: storeIdRef.current.input.value.trim(),
                    storeToken: storeTokenRef.current.resizableTextArea.textArea.value.trim(),
                    userId: userId,
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
                            label="Store name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter Store name',
                                },
                            ]}
                        >
                            <Input ref={nameRef} className='!py-[10px] !px-[10px]' placeholder="Please enter Store name" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="storeID"
                            label="Store ID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter storeID',
                                },
                            ]}
                        >
                            <Input ref={storeIdRef} className='!py-[10px] !px-[10px]' placeholder="Please enter Store ID" />
                        </Form.Item>
                    </Col>


                </Row>

                <Row gutter={16}>


                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            className='!text-[#fff]'
                            name="access-token"
                            label="Store API Token"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter Store Token',
                                },
                            ]}
                        >
                            <TextArea ref={storeTokenRef} className='!py-[10px] !h-[44px]  !px-[10px]' placeholder="Please enter Store API Token" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Owner"
                            label="Owner"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select an owner',
                                },
                            ]}
                        >
                            <Select onChange={setOwner} className='!h-[44px]' placeholder="Please select an owner">
                                {
                                    users?.map(user => <Option key={nanoid()} value={user._id}>{user.name} {user.sname}</Option>) 
                                    ?? <Option>Empty</Option>
                                }
                            </Select>
                        </Form.Item>
                    </Col>

                </Row>
                <Button onClick={createStore} type='primary'>Create</Button>
            </Form>
        </>
    );
};
export default StoreForm;