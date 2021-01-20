import * as React from 'react'
import Son from './Son'

import './index.css'

type Props = { theme: string };
type State = { };

class Father extends React.PureComponent<Props, State> {
  state = {};
  render() {
    console.log('father')
    return (
      <div id='father'>
        <h3>father</h3>
        <h5>{this.props.theme}</h5>
        <Son />
      </div>
    )
  }
}

export default Father;
