import React, { memo, useRef } from 'react';

/*
 function addform(props) {

 }
 function 컴포넌트에서는 함수형 scope 으로 사용하기 때문에 this 를 쓰지 않는다.
 memo 는 function 컴포넌트에서 사용하는 PureCompoenent 같은 것.
 */
interface AddFormProps {
  onAddHabit: (habitName: string) => void
}

const Addform = memo(({ onAddHabit }: AddFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddHabit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const { current } = inputRef;
    if (current !== null) {
      const name = current.value;
      if (name.length === 0) {
        alert('습관을 한글자 이상 입력하세요');
        return;
      }
      onAddHabit(name);
      // this.current.reset();
      current.value = '';
      // console.log('addform.jsx');
    }
  };
  return (
    <form className='add-form' onSubmit={handleAddHabit}>
      <input
        ref={inputRef}
        className='add-input'
        type='text'
        autoComplete='off'
        placeholder='습관을 입력해주세요.'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default Addform;
