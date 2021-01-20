import * as React from 'react'
import FancyButton from './FancyButton'
import CustomTextInput from './CustomTextInput'
import HighButton from './HighButton'
import AutoFocusTextInput from './AutoFocusTextInput'
import CallbackTextInput from './CallbackTextInput'
import CallbackFunctionInput from './CallbackFunctionInput'

type Props = { };
type State = { };

class Refs extends React.Component<Props, State> {
  ref = React.createRef<HTMLButtonElement>();

  ref1 = React.createRef<HTMLButtonElement>();
  componentDidMount() {
    // console.log(this.ref)
  }
  render() {
    return (
      <div>
        <h1>Refs</h1>

        {/* 访问refs
        * DOM添加ref
        * class组件添加ref
        * 不能在函数组件使用ref（无实例）（1.forwardRef 2.转class）
        */}
        <AutoFocusTextInput></AutoFocusTextInput>

        {/* 访问refs */}
        {/*<CustomTextInput></CustomTextInput>*/}

        {/* 回调refs */}
        {/*<CallbackTextInput></CallbackTextInput>*/}
        {/* 回调refs */}
        {/*<CallbackFunctionInput></CallbackFunctionInput>*/}

        {/* forwardRef */}
        {/*<FancyButton ref={this.ref}>hello</FancyButton>*/}

        {/* forwardRef 高阶组件 */}
        {/*<HighButton ref={this.ref1}></HighButton>*/}

      </div>
    )
  }
}

export default Refs;
