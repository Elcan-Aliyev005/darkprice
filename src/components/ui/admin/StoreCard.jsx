import React from 'react'
import SwitchBox from '../Switch'
import { setActiveStore } from '../../../services/admin/stores/setActiveUser'

function StoreCard({ name, isActive, _id }) {
    return (
        <div class=" box-shadow p-[10px] w-[calc((100%-120px)/4)] rounded-[8px] border border-[#eee] card text-start">
            <div class="card-body flex items-center justify-between">
                <h4 class="card-title whitespace-nowrap">{name}</h4>
                <SwitchBox isActive={isActive} id={_id} updateFc={setActiveStore} />
            </div>
        </div>
    )
}

export default StoreCard