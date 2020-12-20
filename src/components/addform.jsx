import React, { memo } from 'react';

/*
 function addform(props) {

 }
 function 컴포넌트에서는 함수형 scope 으로 사용하기 때문에 this 를 쓰지 않는다.
 memo 는 function 컴포넌트에서 사용하는 PureCompoenent 같은 것.
 */

const Addform = memo((props) => {
  const inputRef = React.createRef(); // React 16.3^

  const handleAddHabit = (event) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    if (name.length === 0) {
      alert('습관을 한글자 이상 입력하시오');
      return;
    }
    props.onAddHabit(name);
    // this.inputRef.current.reset();
    inputRef.current.value = '';
    console.log('addform.jsx');
  };
  return (
    <form className="add-form" onSubmit={handleAddHabit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        autoComplete="off"
        placeholder="습관을 입력하시오."
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default Addform;
