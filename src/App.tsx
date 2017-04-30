import * as React from 'react'
import './App.css'
import * as classNames from 'classnames'

import {
  Button,
  Intent,
  Classes,
  Overlay,
} from '@blueprintjs/core'

type AppState = {
  isOpen: boolean,
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  render() {
    const classes = classNames(
      Classes.CARD,
      Classes.ELEVATION_4,
      'my-overlay',
    )
    return (
      <div className="App">
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
            <Button style={{float: 'right'}}>Focus</Button>
          </div>
        </Overlay>
      </div>
    )
  }
}

export default App
