import React, {PropTypes, Component} from 'react'


export default class Book extends Component {

    componentWillMount() {
        console.log('comp');
       this.props.getBooks();
    }
   onClickBtn(e){
        console.log(e)
        this.props.getBook(e);

    }

    

    renderBooks(books) {
        return books.map((book) => {
            let t=this.onClickBtn.bind(this,book.id);
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
        const {books,loading}=this.props.bookList
        // const {book}=this.props.activeBook
        if(loading){
            return <div className='container'><h1>Books</h1><h3>Loading...</h3></div>
        }
        return(
            <div className='container'>
                <h1>Books</h1>
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
    getBook: PropTypes.func.isRequired
}