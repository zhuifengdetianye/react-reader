import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import RouteTest from './RouteTest'

const ImportTest = React.lazy(() => import('./ImportTest'));

type Props = { };
type State = { };

class CodeSplit extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <ImportTest />
          </Suspense>
          <RouteTest />
        </ErrorBoundary>
      </div>
    )
  }
}

export default CodeSplit;
