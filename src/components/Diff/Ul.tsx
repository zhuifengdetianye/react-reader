import { thisExpression } from "@babel/types";
import * as React from "react";

type Props = { };
type State = { list: string[]};

class Ul extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('ul')
  }
  render() {
    return (
      <ul>{this.props.children}</ul>
    )
  }
}

export default Ul;
