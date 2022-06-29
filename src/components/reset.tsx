import React, { memo } from 'react';

interface ResetProps {
  onReset: () => void
}

const Reset = memo(({ onReset }: ResetProps) => {
  // console.log('reset.jsx');
  return (
    <>
      <button className='habits-reset' onClick={onReset}>
        Reset All
      </button>
    </>
  );
});

export default Reset;
