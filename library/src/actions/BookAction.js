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
export function getBooks(token) {
    return function (dispatch) {
        dispatch(requestBooks());
        return axios({
            url: URL + 'books',
            timeout: 2000,
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token
            },
            responseType: 'json'
        }).then(function (response) {
            dispatch(receiveBooks(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }
}


export function getBook(id,token) {
    return function (dispatch) {
        dispatch(requestBook());
        return axios({
            url: URL + 'books/' + id,
            timeout: 20000,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token
            },
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
export function createBook(book,token) {
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
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token
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
export function deleteBook(book,token) {
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
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token
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
        type: 'HIDE',
        showBook: false
    }
}
export function hideBookForm() {
    return function (dispatch) {
        dispatch(hdBookForm());
    }
}