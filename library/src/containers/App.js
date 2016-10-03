import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Book from '../components/Book'
import BookForm from '../components/BookForm'
import * as bookActions from '../actions/BookAction'
// import {getBooks,fetchBooksSucces} from '../actions/BookAction'


class App extends Component {
    render() {
        const {bookList, activeBook,showBook} =this.props
        const {getBooks, getBook, shBook,hideBookForm,createBook,deleteBook}=this.props.bookActions
        return <div>
            <Book bookList={bookList}
                  getBooks={getBooks}
                  getBook={getBook}
                  shBook={shBook}
                  hideBookForm={hideBookForm} deleteBook={deleteBook}/>
            {showBook ? <BookForm  activeBook={activeBook} createBook={createBook} hideBookForm={hideBookForm}/> : null}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.book.bookList,
        activeBook: state.book.activeBook,
        showBook: state.book.showBook
    }
}
function mapDispatchToProps(dispatch) {

    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
