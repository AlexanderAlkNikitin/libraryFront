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
        case 'CREATE_SUCCESS_BOOK':
            const newBooks=state.bookList.books.concat(action.data);
            return {...state, activeBook: {book: null},bookList:{books:newBooks,loading:false}}
        case 'DELETE_SUCCESS_BOOK':
            const remBookss = state.bookList.books;
            let indexs = state.bookList.books.findIndex(x=>x.id==action.data);
            const datas=remove(remBookss,indexs);
            return {...state,bookList:{books:datas,loading:false}};
        case 'UPDATE_SUCCESS_BOOK':
            const remBooks = state.bookList.books;
            let index = state.bookList.books.findIndex(x=>x.id==action.data.id);
            const data=remove(remBooks,index).concat(action.data);
            return {...state, activeBook: {book: null},bookList:{books:data,loading:false}}
        case 'HIDE':
            return {...state, showBook: action.showBook,activeBook:{book:null,loading:false}}
        default:
            return state
    }
    function remove(list, index) {
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1)];
    }
}