import React, {Component, PropTypes} from 'react'
// import {Row, Input, Col,Button} from 'react-materialize'


export default class BookForm extends Component {

    onClickBtn(e) {
        e.preventDefault();
        var book = {
            id: e.target.id.value,
            name: e.target.name.value,
            author: e.target.author.value,
            genre: e.target.genre.value
        }
        console.log(e.target.btnn.value)
        this.sleep(1000).then(() => {
            this.props.createBook(book);
        });
        this.props.hideBookForm()

    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    render() {
        const {book}=this.props.activeBook
        return (
            <div className='container'>
                {book ? <h3>Update book </h3> : <h3>Add book</h3>}
                <div className='row'>
                    <div className='col s6'>
                        <form onSubmit={::this.onClickBtn}>
                            <input name='id' type='hidden' defaultValue={book ? book.id : ''} placeholder='id'/>
                            <input name='name' defaultValue={book ? book.name : ''} placeholder='Name'/>
                            <input name='author' defaultValue={book ? book.author : ''} placeholder='Author'/>
                            <input name='genre' defaultValue={book ? book.genre : ''} placeholder='Genre'/>
                            <button name='btnn' className='waves-effect waves-light btn' value={book ? 'Update' : 'Add'}
                                    type='submit'>{book ? 'Update' : 'Add'}</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
BookForm.propsTypes = {
    createBook: PropTypes.func.isRequired,
    hideBookForm: PropTypes.func.isRequired
}