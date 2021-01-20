import * as React from 'react'
import CustomTextInput from './CustomTextInput'

type Props = { };
type State = { };

class AutoFocusTextInput extends React.Component<Props, State> {
  textInput = React.createRef<any>();

  componentDidMount() {
    console.log(this.textInput)
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput
