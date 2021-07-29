import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

function ReturnButton() {
  const history = useHistory();
  return (
    <>
      <Button
        variant="warning"
        onClick={ () => {
          history.push('/');
        } }
        className="return-button"
        data-testid="return-button"
        type="button"
      >
        Voltar
      </Button>{' '}
    </>
  );
}

export default ReturnButton;
