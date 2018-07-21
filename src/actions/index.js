
// An action creator is exported from this module
// This function returns a plain js object with two fields (type and payload)

export function selectBook(book){
    return {
      type: "BOOK_SELECTED",
      payload: book
    };
}
