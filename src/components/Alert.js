import React, {useContext} from 'react';
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {

  const {alert, hide} = useContext(AlertContext);

  

  return(
    alert?  
    <div className={`alert ${alert.type || ''}`}>
      {alert.text || 'some information'}
      <button className="alert__button" onClick={hide}></button>
    </div>:
    null)
}

export default Alert;