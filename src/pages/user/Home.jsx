import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TableItem from '../../components/ui/table/TableItem';
import { nanoid } from 'nanoid';
import { getAllData } from '../../services/data/getAlldata';
import DarkPriceModal from '../../components/ui/modal/Modal';
// import axios from 'axios';
import { Api } from '../../axios/api';
import StartBtn from '../../components/functional/StartBtn';
import { setDataIds } from '../../store/data';
import OffCanvas from '../../components/ui/offcanvas/Offcanvas';
import HistoryModal from '../../components/ui/modal/HistoryModal';

function Home() {

  // const router = useRouter()
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [firstLoading, setFirstLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startButtonDisabled, setStartButtonDisabled] = useState(true)
  const dispatch = useDispatch()
  // modal
  const showModal = () => {
    setIsModalOpen(true);

  };
  //
  const { storeId } = useSelector(store => store.store)
  // const { dataIDs } = useSelector(store => store.data)

  useEffect(() => {
    const control = localStorage.hasOwnProperty("resDataIDs")
    if (!control) {
      (async () => {
        try {
          const resDataIDs = await Api.get(`/storeId/${storeId}`)
          console.log(resDataIDs.data);
          localStorage.setItem("resDataIDs", JSON.stringify(resDataIDs.data));
          dispatch(setDataIds(resDataIDs.data))

        }
        catch (err) {
          console.log(err);
        }
        finally {
          setStartButtonDisabled(false)

        }
      })()
    } else {
      setStartButtonDisabled(false)
    }
  }, [])



  useEffect(() => {

    const localStoreId = JSON.parse(localStorage.getItem("store")).storeId || storeId

    setLoading(true);
    (async () => {
      try {
        const data = await getAllData(page, localStoreId)
        setData(data)
      }
      catch (e) {
        console.log(e)
      }
      finally {
        setTimeout(() => {
          setFirstLoading(false)
          setLoading(false)
        }, 500)
      }
    })
      ()
  }, [page])



  const queryHandler = (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  const handleChange = (e, value) => {
    console.log(value);
    setPage(value)
  }

  return (
    <>
      <div className='min-h-[calc(100vh-46px)] text-[#fff] w-full overflow-hidden flex items-center justify-center'>
        <div className='h-[89vh] glass-effect  text-[15px]  rounded-[20px] p-[20px] container  mx-auto'>
          <div id='main-header' >
            <div className='container  flex items-center justify-between mx-auto'>
              <div className='font-semibold text-[30px] flex items-center gap-[10px]'>
                {firstLoading ? <Skeleton className='!bg-[#aaa] !w-[300px] !h-[40px] ' variant="rounded" /> :
                  <>
                    <StartBtn startButtonDisabled={startButtonDisabled} showModal={showModal} />
                    <h3 className='text-[26px]'>
                      {data?.products?.at(0)?.default_offer?.seller?.name.name} {" "}
                      ({data?.meta?.total})</h3>
                  </>}
              </div>
              <div>

                {firstLoading ?
                  <Skeleton className='!bg-[#aaa] !w-[300px] !h-[45px] ' variant="rounded" /> :
                  <input
                    id='search-input'
                    onChange={queryHandler}
                    placeholder='Məhsulun kodu'
                    className='border-[1px] outline-0 font-semibold bg-[#fff] text-[#000] border-[#aaa] min-w-[300px] rounded-[6px] px-[20px] py-[7px]'
                    type="text" />}
              </div>
            </div>
          </div>
          <div className='rounded-[8px]  overflow-auto  h-[73.7vh] text-[#fff] bg-[#000]  mt-[20px] '>
            {
              loading ? <div className='flex items-center justify-center h-full'>
                <Spin size="large"></Spin>
              </div>

                : <table className='w-full font-semibold'>
                  <thead className='sticky top-0'>
                    <tr className='table-head bg-[#323042] border-b border-[#444]  font-semibold  flex items-center p-[20px] justify-between'>
                      <td className=' w-[calc(0.5/12*100%)]'>№</td>
                      <td className=' w-[calc(1.5/12*100%)]'>Məhsul kodu</td>
                      <td className=' w-[calc(5.5/12*100%)]'>Məhsulun adı</td>
                      <td className=' w-[calc(2/12*100%)]'>Endirimli qiymət</td>
                      <td className=' w-[calc(2/12*100%)]'>Umicodakı qiymət</td>
                      <td className=' w-[calc(1.5/12*100%)]'>Limit</td>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {data?.products
                      ?.filter(item => item.name.toLowerCase().split(" ").some(elem => elem.startsWith(query.toLowerCase())) || item.id.toString().startsWith(query))
                      ?.map((item, index) => <TableItem key={nanoid()}  {...item} index={index} limits={data?.limits} />)}
                  </tbody>
                </table>
            }


          </div>
          <div id='pagination' className='flex items-center mt-[10px] gap-[10px] justify-center text-[#fff]'>
            <Stack spacing={2}>
              <Pagination count={Math.ceil(data?.meta?.total / 20) || 1} page={page} variant="outlined" className='text-[red]' shape="rounded" onChange={handleChange} />
            </Stack>
          </div>
        </div>
      </div>
      <DarkPriceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <HistoryModal />
      <OffCanvas />
    </>

  )
}

export default Home