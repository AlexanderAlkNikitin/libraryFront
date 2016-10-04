import React, {PropTypes, Component} from 'react'
// import BookForm from './BookForm'


export default class Book extends Component {

    componentWillMount() {
        this.props.getBooks(this.props.token);
    }

    onClickBtn(e) {
        this.sleep(500).then(() => {
            this.props.hideBookForm()
        });
        this.props.getBook(e,this.props.token);
        this.sleep(500).then(() => {
            this.props.shBook()
        });
    }

    onClickBtnAddBook() {
        this.props.shBook()
    }

    onClickBtnDeleteBook(e) {

        this.props.deleteBook(e,this.props.token);
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    renderBooks(books) {
        return books.map((book) => {
            let updateBtnClick = this.onClickBtn.bind(this, book.id);
            let deleteBtnClick = this.onClickBtnDeleteBook.bind(this, book);

            return (
                <tbody key={book.id}>
                <tr>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.genre}</td>
                    <td>{book.author}</td>
                    <td >
                        <button className='waves-effect waves-light lighten-2 btn' onClick={updateBtnClick}><i
                            className='material-icons center'>settings</i></button>
                        {' '}
                        <button className='waves-effect waves-light red red-darken-4 btn'
                                onClick={deleteBtnClick}><i
                            className='material-icons center'>delete</i></button>
                    </td>
                </tr>
                </tbody>
            );
        });
    }

    render() {
        const {books, loading}=this.props.bookList
        // const {token}=this.props
        // const {activeBook}=this.props.activeBook
        // const {showBook}=this.props.showBook
        if (loading) {
            return <div className='container'><h1>Books</h1><h3>Loading...</h3></div>
        }
        return (
            <div className='container'>
                <h1>Books</h1>
                <button className='waves-effect waves-light btn' onClick={::this.onClickBtnAddBook}>Show add form
                </button>
                <table className='highlight'>
                    <thead>
                    <tr>
                        <th data-field='id'>Name</th>
                        <th data-field='name'>Name</th>
                        <th data-field='genre'>Genre</th>
                        <th data-field='author'>Author</th>
                    </tr>
                    </thead>
                    {this.renderBooks(books)}
                </table>

            </div>
        )
    }


}
Book.propTypes = {
    // books: PropTypes.array.isRequired,
    getBooks: PropTypes.func.isRequired,
    getBook: PropTypes.func.isRequired,
    shBook: PropTypes.func.isRequired,
    hideBookForm: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired

    // showBook:PropTypes.boolean.isRequired
}