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
        const {isAuthenticated,token,statusText}=this.props
        const {getBooks, getBook, shBook, hideBookForm, createBook, deleteBook}=this.props.bookActions
        const {logine}=this.props.loginActions
        return <div className='row purple lighten-5'>
            <Login logine={logine}
                   token={token}
                   statusText={statusText}/>
            <div className='row'>
                <div className='col s3'>
                    {showBook ? <BookForm activeBook={activeBook}
                                          createBook={createBook}
                                          hideBookForm={hideBookForm}
                                          token={token}
                    /> : null}
                </div>
                <div className={showBook ?'col s9':'col s12'}>
                    {isAuthenticated ? <Book bookList={bookList}
                                             getBooks={getBooks}
                                             getBook={getBook}
                                             shBook={shBook}
                                             hideBookForm={hideBookForm}
                                             deleteBook={deleteBook}
                                             token={token}/> : null}
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.book.bookList,
        activeBook: state.book.activeBook,
        showBook: state.book.showBook,
        isAuthenticated: state.login.isAuthenticated,
        token:state.login.token,
        statusText:state.login.statusText
    }
}
function mapDispatchToProps(dispatch) {

    return {
        bookActions: bindActionCreators(bookActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
