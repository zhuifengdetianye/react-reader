import * as React from 'react'

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class CallbackFunctionInput extends React.Component {
  inputElement: React.ReactNode | null = null;
  componentDidMount() {
    console.log(this.inputElement)
  }
  render() {
    return (
      <CustomTextInput
        inputRef={(el: HTMLElement) => this.inputElement = el}
      />
    );
  }
}

export default CallbackFunctionInput;
