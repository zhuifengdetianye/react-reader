import * as React from 'react'
import Grandson from './Grandson'
import { OneContext } from './ContextFactory'

import './index.css'

type Props = { };
type State = { };

class Son extends React.PureComponent<Props, State> {
  state = {};
  render() {
    console.log('son')
    return (
      <div id='son'>
        <h3>son</h3>
         <h4>{this.context.theme}</h4>
        <Grandson />
      </div>
    )
  }
}

Son.contextType = OneContext;

export default Son;
