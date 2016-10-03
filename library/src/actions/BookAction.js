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
export function getBooks() {
    return function (dispatch) {
        dispatch(requestBooks());
        return axios({
            url: URL + 'books',
            // url: URL + 'comments?'+'postId='+1,
            timeout: 20000,
            // params: {
            //     postId: 1
            // },
            method: 'GET',
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
            url: URL + 'books',
            timeout: 20000,
            params: {
                id: id
            },
            method: 'GET',
            responseType: 'json'
        }).then(function (response) {
            dispatch(receiveBook(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }

}