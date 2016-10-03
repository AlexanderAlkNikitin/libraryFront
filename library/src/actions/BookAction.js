import axios from 'axios';


function requestBooks() {
    console.log('fetch_books')
    return {type: 'FETCH_BOOKS'}
}
function requestBook() {
    console.log('fetch_book')
    return {type: 'FETCH_BOOK'}
}
function receiveBooks(json) {
    console.log('fetched_books')
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        data: json
    }
}
function receiveBook(json) {
    console.log('fetched_book')
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
    return{
        type: 'SHOW',
        showBook:true
    }
}
export function getBooks() {
    return function (dispatch) {
        dispatch(requestBooks());
        return axios({
            url: URL + 'books',
            timeout: 20000,
            // headers:[{
            //     contentType:'application/json;charset=UTF-8',
            //     transferEncoding:'chunked',
            //     origin:'http://localhost:8080/books'
            // }],
            // method: 'GET',
            responseType: 'json'
        }).then(function (response) {
            dispatch(receiveBooks(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }
}


export function getBook(id) {

    console.log('in getBook'+id.valueOf())
    return function (dispatch) {
        dispatch(requestBook());
        return axios({
            url: URL + 'books/'+id,
            timeout: 20000,
            // params: {
            //     id: id
            // },
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
    return{
        type: 'CREATE_SUCCESS_BOOK',
        data: data
    }
}
export function createBook(book) {
    console.log(book)
    return function (dispatch) {
        return axios({
            url:URL+'books/save',
            timeout:20000,
            data:{
                id:book.id,
                name:book.name,
                author:book.author,
                genre:book.genre
            },
            method:'POST',
            // headers:[{
            //   contentType:'application/json'}
            // ],
            responseType:'json'
        }).then(function (response) {
            dispatch(receiveNewBook(response.data))
        })
    }
}
function delBook(data) {
    return{
        type: 'DELETE_SUCCESS_BOOK',
        data: data
    }
}
export function deleteBook(book) {
    console.log(book)
    return function (dispatch) {
        return axios({
            url:URL+'books/delete',
            timeout:20000,
            data:{
                id:book.id,
                name:book.name,
                author:book.author,
                genre:book.genre
            },
            method:'delete',
            // headers:[{
            //   contentType:'application/json'}
            // ],
            responseType:'json'
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
    return{
        type: 'SHOW',
        showBook:false
    }
}
export function hideBookForm() {
    return function (dispatch) {
        dispatch(hdBookForm());
    }
}