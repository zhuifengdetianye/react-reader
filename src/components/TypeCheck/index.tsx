import * as React from 'react'
import VisitorList from './VisitorList'
import { Visitor } from '../../type'

import './index.css'

type Props = {}
type State = {
  list: Array<Visitor>,
}

class TypeCheck extends React.Component<Props, State> {
  state = {
    list: [
      {name: 'foo', isLogin: true, avatar: '', id: 1, type: 'experience', handleClick: (name: string) => {console.log(1 + name)}},
      {name: 'bar', isLogin: false, avatar: '', id: 2, type: 'system', handleClick: (name: string) => {console.log(2 + name)}},
      {name: 'lee', isLogin: true, avatar: '', id: 3, type: 'vip', handleClick: (name: string) => {console.log(3 + name)}}
    ]
  };
  render() {
    return (
      <div>
        <VisitorList title='用户列表' visitors={this.state.list}/>
      </div>
    );
  }
}


export default TypeCheck
