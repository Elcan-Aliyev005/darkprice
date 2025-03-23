import React, { useEffect, useState } from 'react'
import Title from '../../../components/layout/admin/Title'
import SwitchBox from '../../../components/ui/Switch'
import { getAllUsers } from '../../../services/admin/getAllUsers'
import { Spin } from 'antd'
import UserCard from '../../../components/ui/admin/UserCard'
import { nanoid } from 'nanoid'

function UserList() {
  const [users, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllUsers()
        setUser(data)
        console.log(data);
      }
      finally {
        setTimeout(()=>{
          setLoading(false)
        },100 )
      }

    })()
  }, [])

  return (
    <div className=' '>
      <Title title={"User list"} />
      <div className='p-[50px] overflow-auto h-[calc(100vh-66px)] '>
        {
          loading ?
            <div className='w-full flex items-center h-[calc(100vh-66px)] justify-center'>
              <Spin />
            </div>
            : (
              <div className='flex items-center flex-wrap  gap-[30px]'>
                {users.map(item => <UserCard key={nanoid()} {...item} />)}
              </div>

            )}


      </div>
    </div>
  )
}

export default UserList