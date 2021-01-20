import * as React from "react";
import { Link } from "react-router-dom";
import './index.css';

type Props = { };
type State = { };

class NavBar extends React.Component<Props, State> {
  render() {
    return (
      <div id="nav-bar">
        <Link to='/codeSplit'>代码分割</Link>
        <Link to='/context'>Context</Link>
        <Link to='/portals'>Portals</Link>
        <Link to='/refs'>Refs</Link>
        <Link to='/diff'>Diffing算法</Link>
        <Link to='/renderProps'>Render Props</Link>
        <Link to='/typeCheck'>类型检查</Link>
      </div>
    )
  }
}

export default NavBar;
