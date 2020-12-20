import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  // lifecycle 20/12/20
  componentDidMount() {
    // component 가 등록될때 호출됨.
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    // component 가 삭제되기 전에 호출됨.
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  handleIncrement = () => {
    //   //console.log('increaseCount: ', event);
    //   //이런식으로 직접 state 변수를 set 만 하면 리액트가 변화를 감지하지 못함.
    //   //this.state.count += 1;
    //   //setState 메소드를 사용하자
    //   this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    //   const count = this.state.count - 1;
    //   this.setState({ count: count < 0 ? 0 : count });
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log('habit.jsx render: ', this.props.habit);
    console.log('habit.jsx');
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
