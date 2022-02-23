import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  // console.log('message::', message);
  return (
    <div>
      Message:
      {' '}
      {message.text}
    </div>
  );
};

/* Greeting.propTypes = {
  message: PropTypes.string
}; */
export default Greeting;
