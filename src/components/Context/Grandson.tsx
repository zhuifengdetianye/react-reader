import * as React from 'react'
import { OneContext, TwoContext } from './ContextFactory'
import './index.css'

type Props = { };
type State = { };

class Grandson extends React.PureComponent<Props, State> {
  state = {};
  render() {
    console.log('grandson')
    return (
      <div id='grandson'>
        <h3>grandson</h3>
        <OneContext.Consumer>
          {({theme, toggleTheme}) => {
            console.log('context')
            return (
              <TwoContext.Consumer>
                {({avatar}) => (
                  <div>
                    <h4>{theme}</h4>
                    <span>{avatar}</span>
                    <button onClick={toggleTheme}>toogle theme</button>
                  </div>
                )}
              </TwoContext.Consumer>
            )
          }}
        </OneContext.Consumer>
      </div>
    )
  }
}

export default Grandson;
