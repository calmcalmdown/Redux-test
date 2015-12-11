/*
  This is just the <Main/> component, but with the state and the actionCreators applied to the props
*/

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

/*
  Components
  This is where the actual interface / view comes into play
  Everything is in Main - so we import that one
*/

import Main from './Main';

/*
  Mapping

  We need a way to make
  1. our state (our data)
  2. our 'dispatch' functions 
  available to the <Counter /> component.

  We will surface state and functions via props (this.props.whatever)

*/

function mapStateToProps(state) {
  // Here we make state.counter available via `this.props.counter`
  return {
    posts: state.posts,
    comments : state.comments
  };
}


/* This will make the bind our actions to dispatch (make the fire-able) and */
function mapDispatchToProps(dispatch) {
  // Here we are providing and object of all the actions that need to be made available via props
  // We have three: increment, and decrement
  return bindActionCreators(actionCreators, dispatch);
  /* Note: bindActionCreators will alos make these actions available to all children */
}

// We create an <App/> component which is just our <Main/> component with it's props
// populated with our functions (increment & decrement) and our state (counter)
 
var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
