import React, { useState } from 'react';
import { Switch } from 'antd';
import { setActiveUser } from '../../services/admin/setActiveUser';


const SwitchBox = ({ isActive, id }) => {
    const [active, setActive] = useState(isActive)
    const onChange = (checked) => {
        setActive(!active);
        (async () => {
            try {
              const data =  await setActiveUser(id, !active)
            }
            catch (e) { 
                console.log(e);
            }
        })()
    };

    return (<Switch checked={active} onChange={onChange} />)
};

export default SwitchBox