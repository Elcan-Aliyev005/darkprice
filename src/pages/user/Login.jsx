import { setStore } from '../../store/store/index'
import { setLogin } from '../..//store/auth/index'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { login } from '../../services/auth/user/login'
import { setUser } from '../../store/user'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const credentialRef = useRef('')
  const passwordRef = useRef('')
  const redirect = useNavigate()
  // const { storeId } = useSelector(store => store.store)


  useEffect(() => {
    dispatch(setLogin(false))
    localStorage.setItem("isLogin", false)
    localStorage.setItem("store", `{}`)
    localStorage.setItem("user", `{}`)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    const credential = credentialRef.current.value;
    const password = passwordRef.current.value;


    (async () => {
      try {
        const data = await login(credential, password)
        console.log(data);

        localStorage.setItem("user", JSON.stringify(data.user))
        dispatch(setUser(data.user))
        dispatch(setLogin(true))
        localStorage.setItem("store", JSON.stringify(data?.user?.stores?.find(item => item.isMain)))
        dispatch(setStore(data?.user?.stores?.find(item => item.isMain)));

        localStorage.setItem("isLogin", true)
      } catch (e) {
        console.log(e);
      }
      finally {
        setLoading(false);

        redirect("/")
      }

    })()

  }


  return (
    <div className='container h-[calc(100vh-45px)] mx-auto flex items-center justify-center'>
      <fieldset className='rounded-[20px] px-[30px] py-[20px] bg-[#1B1B1E] glass-effect  w-[700px] '>
        <legend className='text-[40px] font-semibold px-[10px] text-[#fff]  '>Sign In </legend>
        <form onSubmit={handleLogin} className='flex flex-col  rounded-[20px] h-[350px]  gap-[20px] items-center text-[#fff] py-[50px] justify-center '>
          {
            loading ? <Spin size='large' /> : <>
              {/* <input value={"elcan@div.edu.az"} ref={credentialRef} type="text" placeholder='Email or Username' autoComplete="email" className='border bg-[#fff] text-[#000] outline-0 w-[400px] p-[15px] rounded-[8px]' /> */}
              {/* <input value={"elcan123"} ref={passwordRef} type="password" placeholder='Password' autoComplete="current-password" className='border bg-[#fff] text-[#000] outline-0 w-[400px] p-[15px] rounded-[8px]' /> */}
              <input value={"wozagos@mailinator.com"} ref={credentialRef} type="text" placeholder='Email or Username' autoComplete="email" className='border bg-[#fff] text-[#000] outline-0 w-[400px] p-[15px] rounded-[8px]' />
              <input value={"Commodi consequatur"} ref={passwordRef} type="password" placeholder='Password' autoComplete="current-password" className='border bg-[#fff] text-[#000] outline-0 w-[400px] p-[15px] rounded-[8px]' />
              <button className='bg-[#000] text-[#fff] w-[400px] py-[15px] rounded-[8px]'>Login</button>
            </>
          }
        </form>
      </fieldset>
    </div>
  )
}

export default Login