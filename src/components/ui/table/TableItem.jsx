import React, { useRef, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { limitHandler } from '../../../services/data/limitHandler';
import { useSelector } from 'react-redux';

function TableItem({ index, id, name, default_offer, limits, default_marketing_name, offers }) {

    const findEl = limits?.find(item => item.productId == id)
    const productLimit = findEl?.limit ? findEl?.limit?.toFixed(2) : "0.00"
    const [value, setValue] = useState(productLimit)
    const [readOnly, setReadOnly] = useState(true)
    const InpRef = useRef()
    const { storeId } = useSelector(store => store.store)
    const { retail_price, old_price } = default_offer
    const cheapOffer = offers.find(item => item.marketing_name_id == default_marketing_name?.internal_id) || null

    const handleEdit = () => {
        if (!readOnly) {
            (() => { const data = limitHandler(id, +value, retail_price, old_price, storeId, name) })()
            if (value == "") {
                setValue("0.00")
            }
            setValue(Number(value).toFixed(2))
        }
        setReadOnly(!readOnly)
    }

    const style = `${!readOnly ? "bg-[#fff] text-[#000]" : "text-[#fff]"} transition-all number-input outline-[0] p-[5px] rounded w-[70px]`

    const handleChange = (e) => {
        const val = e.target.value
        console.log(val);


        if (val.length > 8) {
            alert("max limit")
        }
        else if (!val.startsWith("0.") && val.startsWith("0") && val.length > 1) {
            alert("limit price don't start with 0")
        }
        else {
            setValue(e.target.value);
        }
    }


    return (
        <tr className='hover:bg-[#323042] row  border-b border-[#444] justify-between py-[15px] px-[20px] flex items-center '>
            <td className=' w-[calc(0.5/12*100%)] '>{index + 1}</td>
            <td className=' w-[calc(1.5/12*100%)] '>{id}</td>
            <td className=' w-[calc(5.5/12*100%)] pe-[20px]'>{name}</td>
            <td className=' w-[calc(2/12*100%)]'  >{default_offer?.retail_price}</td>
            {/* <td className=' w-[calc(2/12*100%)]'  >{default_offer?.old_price ? default_offer?.old_price : default_offer?.retail_price}</td> */}
            <td className=' w-[calc(2/12*100%)]'  >{cheapOffer?.retail_price.toFixed(2)} <span className='text-[10px]'>({cheapOffer?.marketing_name?.name})</span></td>
            <td className=' w-[calc(1.5/12*100%)] '>
                <div className='flex items-center gap-[20px]'>
                    <input ref={InpRef} type="number" value={value} onChange={handleChange} readOnly={readOnly} className={style} />
                    <div onClick={handleEdit} className={`${!readOnly ? "bg-[green]" : ""} rounded py-[10px]  transition-all px-[10px]`}>
                        <FiEdit />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableItem