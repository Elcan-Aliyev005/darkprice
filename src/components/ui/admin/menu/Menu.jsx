import React, { useState } from 'react';
import {
    AppstoreAddOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { LuUsers } from "react-icons/lu";
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const DashboardMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigate = useNavigate()
    const items = [
        {
            key: "1",
            icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
            label: "Dashboard",
            onClick: () => { toggleCollapsed() }

        },

        {
            key: 'sub-1',
            icon: <UserOutlined />,
            label: 'Users',
            children: [
                {
                    key: 'sub-1-1',
                    icon: <LuUsers />,
                    label: 'User list',
                    onClick: () => navigate("/admin/users")
                },
                {
                    key: 'sub-1-2',
                    icon: <UserAddOutlined />,
                    label: 'Create a new user',
                    onClick: () => navigate("/admin/create-user")
                },
            ]
        },
        {
            key: 'sub-2',
            icon: <AppstoreOutlined />,
            label: 'Stores',
            children: [
                {
                    key: 'sub-2-1',
                    icon: <AppstoreOutlined />,
                    label: 'Store list',
                    onClick: () => navigate("/admin/stores")
                },
                {
                    key: 'sub-2-2',
                    icon: <AppstoreAddOutlined />,
                    label: 'Create a new store',
                    onClick: () => navigate("/admin/create-store")
                },
            ]
        },
        {
            key: 'sub-3',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: '9',
                    label: 'Option 9',
                },
                {
                    key: '10',
                    label: 'Option 10',
                },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        {
                            key: '11',
                            label: 'Option 11',
                        },
                        {
                            key: '12',
                            label: 'Option 12',
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div
            style={{
                height: "100%",
            }}
        >

            <Menu
                style={{ height: "100%" }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default DashboardMenu;