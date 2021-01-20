import * as React from 'react'
import { OneContext, TwoContext } from './ContextFactory'
import Father from './Father'

type Props = { };
type State = { theme: string, toggleTheme: Function };

class Context extends React.Component<Props, State> {
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
  }
  state = {
    theme: 'dark',
    toggleTheme: this.toggleTheme,
  };
  render() {
    return (
      <div>
        <h1>context</h1>

        {/* 单个context 消费单个context */}
        <div>
          <OneContext.Provider value={this.state}>
            <Father theme={this.state.theme}/>
            <Father theme={this.state.theme}/>
          </OneContext.Provider>
        </div>
        <div>
          {/* 单个context 嵌套 */}
          <OneContext.Provider value={this.state}>
            <OneContext.Provider value={{theme: 'light', toggleTheme: () => {}}}>
              <Father theme={this.state.theme}/>
              <Father theme={this.state.theme}/>
            </OneContext.Provider>
          </OneContext.Provider>
        </div>
        <div>
          {/* 多个context 嵌套 */}
          <OneContext.Provider value={this.state}>
            <TwoContext.Provider value={{avatar: 'avatarNew'}}>
              <Father theme={this.state.theme}/>
              <Father theme={this.state.theme}/>
            </TwoContext.Provider>
          </OneContext.Provider>
        </div>
      </div>
    )
  }
}

export default Context;
