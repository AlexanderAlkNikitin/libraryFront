import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Book from '../components/Book'
import Login from '../components/Login'
import BookForm from '../components/BookForm'
import * as bookActions from '../actions/BookAction'
import * as loginActions from '../actions/LoginAction'
// import {getBooks,fetchBooksSucces} from '../actions/BookAction'


class App extends Component {
    render() {
        const {bookList, activeBook, showBook} =this.props
        const {isAuthenticated,token}=this.props
        const {getBooks, getBook, shBook, hideBookForm, createBook, deleteBook}=this.props.bookActions
        const {logine}=this.props.loginActions
        return <div>
            <Login logine={logine}/>
            {isAuthenticated ? <Book bookList={bookList}
                                     getBooks={getBooks}
                                     getBook={getBook}
                                     shBook={shBook}
                                     hideBookForm={hideBookForm} deleteBook={deleteBook} token={token}/> : null}
            {showBook ? <BookForm activeBook={activeBook} createBook={createBook} hideBookForm={hideBookForm}/> : null}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.book.bookList,
        activeBook: state.book.activeBook,
        showBook: state.book.showBook,
        isAuthenticated: state.login.isAuthenticated
    }
}
function mapDispatchToProps(dispatch) {

    return {
        bookActions: bindActionCreators(bookActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
