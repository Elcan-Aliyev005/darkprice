import React, { useEffect, useState } from 'react'
import Title from '../../../components/layout/admin/Title'
import { Spin } from 'antd'
import { getAllStore} from '../../../services/admin/stores/getAllStores'
import StoreCard from '../../../components/ui/admin/StoreCard'
import { nanoid } from 'nanoid'

function StoreList() {
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllStore()
        setStores(data)
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
      <Title title={"Store list"} />
      <div className='p-[50px] overflow-auto h-[calc(100vh-66px)] '>
        {
          loading ?
            <div className='w-full flex items-center h-[calc(100vh-66px)] justify-center'>
              <Spin />
            </div>
            : (
              <div className='flex items-center flex-wrap  gap-[30px]'>
                {stores?.map(item => <StoreCard key={nanoid()} {...item} />) ?? "Empty"}
              </div>

            )}


      </div>
    </div>
  )
}

export default StoreList