import * as React from "react";
import Modal from './Modal'
import Child from './Child'

type Props = { };
type State = { clicks: number };

class Portals extends React.Component<Props, State> {
  state = {clicks: 0};

  handleClick = () =>  {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div id='modal-root'>modal-root</div>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

export default Portals;

/**
 * 事件冒泡
 * 一个从 portal 内部触发的事件会一直冒泡至包含 React 树的祖先，即便这些元素并不是 DOM 树 中的祖先。
 */
