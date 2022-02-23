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
      Message:
      {' '}
      {message.text}
    </div>
  );
};

export default Greeting;
