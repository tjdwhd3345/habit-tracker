import React, { memo } from 'react';

const Reset = memo(({ onReset }) => {
  console.log('reset.jsx');
  return (
    <>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
});

export default Reset;
