import React, { useState } from 'react';
import { Switch } from 'antd';
import { setActiveUser } from '../../services/admin/user/setActiveUser';


const SwitchBox = ({ isActive, id, updateFc }) => {
    const [active, setActive] = useState(isActive)
    const onChange = (checked) => {
        setActive(!active);
        (async () => {
            try {
              const data =  await updateFc(id, !active)
            }
            catch (e) { 
                console.log(e);
            }
        })()
    };

    return (<Switch checked={active} onChange={onChange} />)
};

export default SwitchBox