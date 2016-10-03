import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Book from '../components/Book'
import BookForm from '../components/BookForm'
import * as bookActions from '../actions/BookAction'
// import {getBooks,fetchBooksSucces} from '../actions/BookAction'


class App extends Component {
    render() {
        const {bookList, activeBook} =this.props
        const {getBooks, getBook}=this.props.bookActions
        return <div>
            <Book bookList={bookList} getBooks={getBooks} getBook={getBook}/>
            <BookForm  activeBook={activeBook}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.book.bookList,
        activeBook: state.book.activeBook
    }
}
function mapDispatchToProps(dispatch) {

    return {
        // getBooks:()=>{
        //     dispatch(getBooks()).then((response)=>{dispatch(fetchBooksSucces(response.payload))});
        // },
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
