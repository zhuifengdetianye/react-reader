import * as React from 'react'

type Props = { forwardedRef: any };
type State = { };
type ButtonProps = React.HTMLProps<HTMLButtonElement>

function logProps(Component: any) {
  class LogProps extends React.Component<Props, State> {
    componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

class HighButton extends React.Component {
  focus() {
    // ...
  }

  render() {
    return (
      <button>{this.props.children}</button>
    )
  }
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(HighButton);