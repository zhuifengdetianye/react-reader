import * as React from "react";

type Props = { };
type State = { };

class ErrorBoundary extends React.Component<Props, State> {

  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>组件渲染失败</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;