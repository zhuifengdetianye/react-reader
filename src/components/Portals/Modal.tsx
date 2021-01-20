import * as React from "react";
import ReactDOM from 'react-dom';

type Props = { };
type State = { };



class Modal extends React.Component<Props, State> {

  el = document.createElement('div');

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot && modalRoot.appendChild(this.el);
    console.log(modalRoot)
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    modalRoot && modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default Modal;