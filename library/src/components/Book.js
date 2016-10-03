import React, {PropTypes, Component} from 'react'
// import BookForm from './BookForm'


export default class Book extends Component {

    componentWillMount() {
        console.log('comps');
        this.props.getBooks();
    }
    onClickBtn(e) {
        this.sleep(500).then(() => {
            this.props.hideBookForm()
        });
        console.log(e)
        this.props.getBook(e);
        this.sleep(500).then(() => {
            this.props.shBook()
        });
    }
    onClickBtnAddBook(){
        console.log('show add');
        this.props.shBook()
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    renderBooks(books) {
        return books.map((book) => {
            let t = this.onClickBtn.bind(this, book.id);
            return (
                <tbody key={book.id}>
                <tr onClick={t}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.genre}</td>
                    <td>{book.author}</td>
                </tr>
                </tbody>
            );
        });
    }

    render() {
        const {books, loading}=this.props.bookList
        // const {activeBook}=this.props.activeBook
        // const {showBook}=this.props.showBook
        if (loading) {
            return <div className='container'><h1>Books</h1><h3>Loading...</h3></div>
        }
        return (
            <div className='container'>
                <h1>Books</h1>
                <button className='waves-effect waves-light btn' onClick={::this.onClickBtnAddBook}>button</button>
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
    hideBookForm: PropTypes.func.isRequired
    // showBook:PropTypes.boolean.isRequired
}