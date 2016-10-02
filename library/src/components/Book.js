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
                <li className='list-group-item' key={book.id}>
                    <h3>{book.name} s</h3>
                    {/*<button className='btn' onClick={t}>{book.name}</button>*/}
                    <a className='waves-effect waves-light btn modal-trigger' onClick={t} href='#modal1'>{book.name}</a>

                </li>
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
                <ul className='list-group'>
                    {this.renderBooks(books)}
                </ul>
                <div id='modal1' className='modal'>
                    <div className='modal-content'>
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className='modal-footer'>
                        <a href='#!' className=' modal-action modal-close waves-effect waves-green btn-flat'>Agree</a>
                    </div>
                </div>
            </div>
        )
    }


}
Book.propTypes = {
    // books: PropTypes.array.isRequired,
    getBooks: PropTypes.func.isRequired,
    getBook: PropTypes.func.isRequired
}