
/*
* This module exports a function or a reducer
* which returns an array of book objects
*/

export default function booksReducer(){
  return(
    [
      {title: 'Javascript: The Good Parts', pages: 200},
      {title: 'Harry Potter', pages: 250 },
      {title: 'The Dark Tower', pages: 270},
      {title: 'Eloquent Ruby', pages: 50}
    ]
  )
}
