import * as React from 'react'
import { Visitor } from '../../type'

import './index.css'

type Props = {
  title: string,
  visitors: Array<Visitor>,
}
type State = {}

class VisitorList extends React.Component<Props, State> {

  render() {
    const { title, visitors } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <div>
          <span>姓名</span>
          <span>id</span>
          <span>是否登录</span>
        </div>
        {visitors.map(({id, name, isLogin, handleClick}) => (
          <div key={id} onClick={(e) => handleClick(name)}>
            <span>{name}</span>
            <span>{id}</span>
            <span>{isLogin ? '是' : '否'}</span>
          </div>
        ))}
      </div>
    );
  }
}


export default VisitorList
