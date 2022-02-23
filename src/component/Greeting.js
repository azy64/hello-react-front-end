import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmessage } from '../redux/message/messageReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmessage());
  }, []);
  const message = useSelector((state) => state.messageReducer.message);
  return (
    <div>
      <div style={{ marginLeft: '10px', margin: 'auto', width: '300px' }}>
        Message:
        {message.text}
        {' '}
        <br />
        <button
          type="button"
          onClick={() => dispatch(fetchmessage())}
          style={{
            border: 'none',
            backgroundColor: '#007bff',
            padding: '6px',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          Greet
        </button>
      </div>
    </div>
  );
};

export default Greeting;
