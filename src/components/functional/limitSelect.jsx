

import React from 'react';
import { Select, Space } from 'antd';
const handleChange = value => {
    console.log(`selected ${value}`);
};
const LimitSelect = () => (
        <Select
            defaultValue="Məhsul seçin"
            className='w-full text-[#fff]'
            onChange={handleChange}
        >
            <Option value="all">Bütün Məhsullar</Option>
            <Option value="unlimited">Limitsiz Məhsullar</Option>
        </Select>
);
export default LimitSelect;