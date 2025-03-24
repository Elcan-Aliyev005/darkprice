import React from 'react'
import SwitchBox from '../Switch'
import { setActiveUser } from '../../../services/admin/user/setActiveUser'

function UserCard({ name, sname, isActive, _id }) {
    return (
        <div class=" box-shadow p-[10px] w-[calc((100%-120px)/4)] rounded-[8px] border border-[#eee] card text-start">
            <div class="card-body flex items-center justify-between">
                <h4 class="card-title whitespace-nowrap">{name} {sname}</h4>
                <SwitchBox isActive={isActive} id={_id} updateFc={setActiveUser} />
            </div>
        </div>
    )
}

export default UserCard