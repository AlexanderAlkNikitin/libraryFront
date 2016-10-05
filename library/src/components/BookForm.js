import React, {Component, PropTypes} from 'react'
// import {Row, Input, Col,Button} from 'react-materialize'

// var divStyle = {
//     marginTop:67
// };
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
            console.log('token in bookform'+this.props.token.token)
            this.props.createBook(book,this.props.token.token);
        });
        this.props.hideBookForm()

    }
    onClickAbort(e){
        e.preventDefault();
        this.props.hideBookForm()
            }
    onResetEverything(){
        this.triggerReset();
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    render() {
        const {book}=this.props.activeBook
        return (
            <div>
                {book ?
                    <div>
                        <h3>Update book </h3>
                        <h4>Updating  book</h4>
                    </div>:
                <div>
                    <h3>Add book</h3>
                    <h4>Creating new book</h4>
                </div>}

                <div className='row'>
                    <div className='row  green accent-1'>
                        <form className='col' onSubmit={::this.onClickBtn}>
                            <input name='id' type='hidden' defaultValue={book ? book.id : ''} placeholder='id'/>
                            <div className='col'>
                                <label>Name</label>
                            </div>

                            <div className='input-field col s11'>
                                <input id='names' type='text' name='name' defaultValue={book ? book.name : ''} />
                            </div>
                            <div className='col'>
                                <label>Author</label>
                            </div>
                            <div className='input-field col s11'>
                                <input  id='author' type='text' name='author' defaultValue={book ? book.author : ''} />
                            </div>
                            <div className='col'>
                                <label>Genre</label>
                            </div>
                            <div className='input-field col s11'>
                                <input id='genre' type='text' name='genre' defaultValue={book ? book.genre : ''} />
                            </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button name='btnn' className='waves-effect waves-light btn' value={book ? 'Update' : 'Add'}
                                                type='submit'>{book ? 'Update' : 'Add'}</button>
                                    </div>
                                    <div className='col'>
                                        <button name='btnn' className='waves-effect waves-light btn' onClick={::this.onClickAbort}
                                                >Cancel</button>
                                    </div>
                                </div>
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