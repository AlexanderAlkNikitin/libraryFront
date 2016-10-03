const initialState = {
    bookList: {books: [], loading: false},
    activeBook: {book: null, loading: false},
    showBook: false
}

export default function getBook(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return {...state, bookList: {books: [], loading: true}}
        case 'FETCH_BOOKS_SUCCESS':// return list of posts and make loading = false

            return {...state, bookList: {books: action.data, loading: false}};
        case 'ERROR':
            return state
        case 'FETCH_BOOK':
            return {...state, activeBook: {...state.activeBook, loading: true}}
        case 'FETCH_BOOK_SUCCESS':
            return {...state, activeBook: {book: action.data, loading: false}}
        case 'SHOW':
            return {...state, showBook: action.showBook}
        case 'CREATE_SUCCES_BOOK':
            return {...state, activeBook: {book: action.data}}
        case 'DELETE_SUCCESS_BOOK':
            return {...state,bookList:{books:action.data,loading:false}}
        default:
            return state
    }

}