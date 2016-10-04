import axios from 'axios';


function requestBooks() {
    return {type: 'FETCH_BOOKS'}
}
function requestBook() {
    return {type: 'FETCH_BOOK'}
}
function receiveBooks(json) {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        data: json
    }
}
function receiveBook(json) {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        data: json
    }
}
const URL = 'http://localhost:8080/';
function receiveError(data) {
    return {
        type: 'ERROR',
        data: data
    }
}
function setShowBook() {
    return {
        type: 'SHOW',
        showBook: true
    }
}
export function getBooks() {
    return function (dispatch) {
        dispatch(requestBooks());
        return axios({
            url: URL + 'books',
            timeout: 2000,
            responseType: 'json'
        }).then(function (response) {
            dispatch(receiveBooks(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }
}


export function getBook(id) {
    return function (dispatch) {
        dispatch(requestBook());
        return axios({
            url: URL + 'books/' + id,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then(function (response) {
            dispatch(receiveBook(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }
}
function receiveNewBook(data) {
    return {
        type: 'CREATE_SUCCESS_BOOK',
        data: data
    }
}
function updateBook(data) {
    return {
        type: 'UPDATE_SUCCESS_BOOK',
        data: data
    }
}
export function createBook(book) {
    return function (dispatch) {
        return axios({
            url: URL + 'books/save',
            timeout: 20000,
            data: {
                id: book.id,
                name: book.name,
                author: book.author,
                genre: book.genre
            },
            method: 'POST',
            responseType: 'json'
        }).then(function (response) {
            if (book.id == 0) {
                dispatch(receiveNewBook(response.data))
            } else {
                dispatch(updateBook(response.data))
            }

        })
    }
}
function delBook(data) {
    return {
        type: 'DELETE_SUCCESS_BOOK',
        data: data
    }
}
export function deleteBook(book) {
    return function (dispatch) {
        return axios({
            url: URL + 'books/delete',
            timeout: 20000,
            data: {
                id: book.id,
                name: book.name,
                author: book.author,
                genre: book.genre
            },
            method: 'delete',
            responseType: 'json'
        }).then(function (response) {
            dispatch(delBook(response.data))
        })
    }
}
export function shBook() {
    return function (dispatch) {
        dispatch(setShowBook());
    }
}
function hdBookForm() {
    return {
        type: 'SHOW',
        showBook: false
    }
}
export function hideBookForm() {
    return function (dispatch) {
        dispatch(hdBookForm());
    }
}