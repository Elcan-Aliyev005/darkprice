import React from 'react';
import { Button, ConfigProvider, Flex, Popover } from 'antd';
import { BsInfoCircleFill } from "react-icons/bs";


const buttonWidth = 80;
const PoppoverInfo = ({text, content}) => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex justify="space-between" align="center">
      <Popover placement="top" title={text} content={content}>
        <BsInfoCircleFill />
      </Popover>
    </Flex>

  </ConfigProvider>
);
export default PoppoverInfo;