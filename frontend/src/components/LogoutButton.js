import React from 'react';
import { useHistory } from 'react-router';

function LogoutButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => {
        history.push('/');
      } }
      className="logout-button"
      data-testid="logout-button"
      type="button"
    >
    Voltar
    </button>
  );
}

export default LogoutButton;
