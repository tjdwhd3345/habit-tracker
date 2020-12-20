import React, { useCallback, useEffect, useRef, useState } from 'react';

/*
 * class 컴포넌트는 처음에 만들어진 변수, 함수 등이 재사용되는 반면에
 * function 컴포넌트는 매번 컴포넌트 전체가 재실행 됨.
 * 여기서 count 가 handleIncrement 시 기억되는 이유는 ..
 * useState 라는 API 를 쓰면 react 가 알아서 상태를 기억하고 업데이트 해준다.
 */

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  // const spanRef = React.createRef(); // 매번 호출할 때 마다 새로운 ref 를 만든다
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  /* function componenet 에서 컴포넌트가 mount, update 될 때마다 실행되는 함수.
   * 두번째 인자로 특정 변수를 지정해주면 해당 변수가 변할 때만 실행됨.
   * 아무것도 전해주지 않는다면 모든 변수가 변할 때 마다 실행됨. -> 리소스 낭비.
   */
  useEffect(() => {
    console.log(`mounted and updated: ${count}`);
  }, [count]);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
