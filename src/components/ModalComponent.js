import React, { useState } from 'react';
import { Button, Input, Modal, Space } from 'antd';
import DropDownComponent from './DropDownComponent';
import TextArea from 'antd/es/input/TextArea';

function ModalComponent ({openModal}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');

  console.log('Value', value);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useState(() => {
    if(openModal) {
      setIsModalOpen(true);
    }
  }, [isModalOpen, openModal])

  return (
    <>
      <Space>
          <Button type="primary" size="large" onClick={showModal}>
            + Add Note
          </Button>
        </Space>
      <Modal title="Create Note" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    
       <Input style={{marginTop:5, marginBottom:5}} placeholder='Note title' onChange={(event) => setValue(event.target.value)} />
   
    
       <Input required style={{marginTop:5, marginBottom:5}} placeholder='Note description' onChange={(event) => setValue(event.target.value)} />
       <TextArea style={{marginTop:5, marginBottom:5}} placeholder='Notes'></TextArea>
       <DropDownComponent />
    
      </Modal>
    </>
  );
};
export default ModalComponent;