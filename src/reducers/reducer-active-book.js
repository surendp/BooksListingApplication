
/*
*  This module exports active book reducer
* which returns a selected book (a plain javascript object)
*/

export default function activeBookReducer(state=null, action){

  // changes the state if needed when an action is created
  switch(action.type){
    case "BOOK_SELECTED":
      return action.payload
  }

  return state;
}
