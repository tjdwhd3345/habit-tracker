import React, { Component } from 'react';

class Addform extends Component {
  inputRef = React.createRef(); // React 16.3^
  handleAddHabit = (event) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    if (name.length === 0) {
      alert('습관을 한글자 이상 입력하시오');
      return;
    }
    this.props.onAddHabit(name);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.handleAddHabit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          id="ipt1"
          placeholder="습관을 입력하시오."
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Addform;
