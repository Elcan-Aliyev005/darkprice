
import { Skeleton } from '@mui/material'

function SkeletonTable() {
    return (
        <table className='w-full '>
            <thead>
                <tr className='table-head bg-[#323042] border-b border-[#444]  font-semibold gap-[5px] h-[63px]  flex items-center px-[5px] justify-between'>
                    <td className='w-[calc((0.5/12*100%)+10px)]'>
                        <Skeleton className='!bg-[#aaa] !w-[75%]' variant="rounded" height={22} />
                    </td>
                    <td className='w-[calc((1.5/12*100%)-12px)]'>
                        <Skeleton className='!bg-[#aaa] !w-[75%] ' variant="rounded" height={22} />
                    </td>
                    <td className='w-[calc((5.5/12*100%)-30px)]'>
                        <Skeleton className='!bg-[#aaa] !w-[75%] ' variant="rounded" height={22} />
                    </td>
                    <td className='w-[calc((2/12*100%)-10px)]'>
                        <Skeleton className='!bg-[#aaa] !w-[75%] ' variant="rounded" height={22} />
                    </td>
                    <td className='w-[calc((2/12*100%)-10px)]'>
                        <Skeleton className='!bg-[#aaa]  !w-[75%] ' variant="rounded" height={22} />
                    </td>
                    <td className='w-[calc((1.5/12*100%)+10px)]'>
                        <Skeleton className='!bg-[#aaa]  !w-[75%] ' variant="rounded" height={22} />
                    </td>
                </tr>
            </thead>

            <tbody className='w-full'>
               {Array.from({length:11}).map((_,index)=>  <tr key={index} className='justify-between  gap-[5px] px-[5px] pt-[10px]  flex items-center '>
                    <td className='!w-12/12'>
                        <Skeleton className='!bg-[#aaa]  !h-[4.9vh]' variant="rounded"  />
                    </td>
                </tr>)}
               
            </tbody>
        </table>

    )
}

export default SkeletonTable