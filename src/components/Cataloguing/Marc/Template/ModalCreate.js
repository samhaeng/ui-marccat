import React from 'react';
import { Button, Modal } from '@folio/stripes/components';

export default function ModalCreate(props) {
  const { handleClose, translate } = props;
  const footer = (
    <React.Fragment>
      <Button buttonStyle="primary" marginBottom0>
        {
          translate({ id: '' })
        }

      </Button>
    </React.Fragment>
  );
  return (
    <Modal
      dismissible
      closeOnBackgroundClick
      open
      label="example"
      footer={footer}
    >
      <Button onClick={handleClose} />
    </Modal>
  );
}
