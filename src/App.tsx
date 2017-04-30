import * as React from 'react'
import './App.css'
import * as classNames from 'classnames'
import {
  Button,
  Intent,
  Classes,
  Overlay,
} from '@blueprintjs/core'

import * as redux from 'redux'
import { connect } from 'react-redux'

import { Store } from './reducers'

import {
  incrementCounter,
} from './actions'

type ReduxState = {
  counter: { value: number },
}

type ReduxActions = {
  increment: (n: number) => void,
}

type OwnProps = {}

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ReduxState => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ReduxActions => ({
  increment: (n: number) =>
    dispatch(incrementCounter(n)),
})

type AppState = {
  isOpen: boolean,
}

export class App extends React.Component<ReduxState & ReduxActions, AppState> {
  constructor(props: ReduxState & ReduxActions) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({isOpen: true})
  }

  handleClose = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({isOpen: false})
  }

  handleFocus = (e: React.MouseEvent<HTMLElement>) => {
    // this.setState({isOpen: false})
  }

  handleIncrement = () => this.props.increment(1)

  render() {
    const classes = classNames(
      Classes.CARD,
      Classes.ELEVATION_4,
      'my-overlay',
    )
    const count = this.props.counter.value
    return (
      <div className="App">
        Count: {count}<br/>
        <Button text="+" onClick={this.handleIncrement} /><br/>
        <Button text="Show Overlay" onClick={this.handleOpen} />
        <Overlay 
          onClose={this.handleClose}
          isOpen={this.state.isOpen}
          hasBackdrop={true}
          inline={false}
          autoFocus={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          enforceFocus={true}
        >
          <div className={classes}>
            <h3>I'm an overlay!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Eaque enim culpa, praesentium delectus accusantium cupiditate
               facilis cum unde. Fuga facere sequi mollitia, illo quia at
               similique consequuntur quos accusantium dicta.</p>
            <Button intent={Intent.DANGER} onClick={this.handleClose}>Close</Button>
            <Button style={{float: 'right'}} onClick={this.handleFocus}>Focus</Button>
          </div>
        </Overlay>
      </div>
    )
  }
}

// export default App
const ConnectedApp: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp