import * as React from "react";
import Ul from './Ul'
import Li from './Li'

type Props = { };
type State = { list: string[], type: number };

class Diff extends React.PureComponent<Props, State> {
  state = {list:['one', 'two', 'three'], type: 1};
  handleClick = () => {
    this.setState({
      list: ['four'+ Math.random(), ...this.state.list]
      // list: [...this.state.list,'four']
    })
  }
  handleToggleClick = () => {
    this.setState({
      type: this.state.type === 1 ? 2 : 1
    })
  }
  component1 = () => (
    <Ul>
      {/* {this.state.list.map((val, index) => <Li key={index}>{val}</Li>)} */}
      {this.state.list.map((val, index) => <Li key={val}>{val}</Li>)}
    </Ul>
  )
  component2 = () => (
    <div>
      {/* {this.state.list.map((val, index) => <Li key={index}>{val}</Li>)} */}
      {this.state.list.map((val, index) => <div key={val}>{val}</div>)}
    </div>
  )
  render() {
    return (
      <div>
        {
          this.state.type === 1 ? this.component1() : this.component2()
        }
        <button onClick={this.handleClick}>添加+</button>
        <button onClick={this.handleToggleClick}>切换</button>
      </div>
    )
  }
}

export default Diff;

/**
 * 两个不同类型的元素会产生出不同的树；
 * 开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定；
 */

 /**
  * Diff算法
  * 对比不同类型的元素
  * 对比同一类型的元素
  * 对比同类型的组件元素
  * 对子节点进行递归
  * Keys
  */
