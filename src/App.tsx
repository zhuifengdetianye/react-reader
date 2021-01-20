import * as React from 'react';
import './App.css';

import NavBar from './components/navBar'
import CodeSplit from './components/CodeSplit'
import Context from './components/Context'
import Refs from './components/Refs'
import Portals from './components/Portals'
import Diff from './components/Diff'
import RenderProps from './components/RenderProps'
import TypeCheck from './components/TypeCheck'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  /**
   * 代码分割: codeSplit
   * import()
   * React.lazy
   * 异常捕获边界
   * 基于理由代码分割
   * 命名导出（只支持default export）
   */

  /**
   * context: context
   */
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/codeSplit">
          <CodeSplit />
        </Route>
        <Route path="/context">
          <Context />
        </Route>
        <Route path="/refs">
          <Refs />
        </Route>
        <Route path="/portals">
          <Portals />
        </Route>
        <Route path="/diff">
          <Diff />
        </Route>
        <Route path="/renderProps">
          <RenderProps />
        </Route>
        <Route path="/typeCheck">
          <TypeCheck/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
