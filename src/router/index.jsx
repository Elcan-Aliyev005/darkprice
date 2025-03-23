import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../pages/user/Main";
import Login from "../pages/user/Login";
import Test from "../pages/user/Test";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import UserList from "../pages/admin/Users/UserList";
import CreateUser from "../pages/admin/Users/CreateUser";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                < Route index element={<Main />} />
                < Route path="/test" element={<Test />} />
                < Route path="/login" element={<Login />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />} >
                < Route index element={<Dashboard />} />
                < Route path="users" element={<UserList />} />
                < Route path="create-user" element={<CreateUser />} />
            </Route>
        </>
    )
)