import { Spin } from 'antd';
import React from 'react'
import { GiSpeedBoat } from "react-icons/gi";

function StartBtn({ showModal, startButtonDisabled }) {
    return (
        <button disabled={startButtonDisabled} onClick={showModal}
            className={` group relative w-[36px] h-[36px]  rounded-full justify-center flex items-center gap-[10px]   p-[4px]   
                ${!startButtonDisabled ? " hover:border-0 border-[#fff]   border-[2px] text-[#fff]" : ""}  text-[30px]`}>
            {
                startButtonDisabled ? <Spin variant="large" /> :
                    <GiSpeedBoat className={`pb-[8px] ps-[2px]  text-[#fff]  group-hover:text-[#fff]   transition-all group-hover:scale-[1.3]`} />
            }

        </button>
    )
}

export default StartBtn