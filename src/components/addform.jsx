import React, { PureComponent } from 'react';

class Addform extends PureComponent {
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
    this.inputRef.current.reset();
  };
  render() {
    console.log('addform.jsx');
    return (
      <form className="add-form" onSubmit={this.handleAddHabit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          autoComplete="off"
          placeholder="습관을 입력하시오."
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Addform;
