import * as React from "react";

type Props = { };
type State = { list: string[]};

class Li extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('li mount')
  }
  componentDidUpdate() {
    console.log('li update')
  }
  render() {
    return (
      <li>{this.props.children}</li>
    )
  }
}

export default Li;
