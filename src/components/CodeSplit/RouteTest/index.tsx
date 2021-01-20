import React, { Suspense, lazy } from 'react';
import { Link } from "react-router-dom";

import {
  Switch,
  Route
} from "react-router-dom";

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

type Props = { };
type State = { };

class RouteTest extends React.Component<Props, State> {
  render() {
    return (
      <div id="nav-bar">
        <Link to='/codeSplit/home'>链接1</Link>
        <Link to='/codeSplit/about'>链接2</Link>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/codeSplit/home" component={Home}/>
            <Route path="/codeSplit/about" component={About}/>
          </Switch>
        </Suspense>
      </div>
    )
  }
}

export default RouteTest;
