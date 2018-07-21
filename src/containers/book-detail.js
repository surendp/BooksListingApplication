
import React, { Component } from 'react';
import { connect } from 'react-redux';


// This component render the selected Book details on the UI
class BookDetail extends Component{
  render(){
    if(!this.props.activeBook)
      return "Select a Book to see the result";

    return(
        <div>
          <h3>Selected Book:</h3>
          <div>Title: {this.props.activeBook.title}</div>
          <div>Number of Pages: {this.props.activeBook.pages}</div>
        </div>
    )
  }
}

// get the application state and pass the required
// state to the props of this component
function mapStateToProps({ activeBook }){
  return { activeBook };
}

// connect the react component with the redux state
export default connect(mapStateToProps)(BookDetail);
