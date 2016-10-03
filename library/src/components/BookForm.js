import React, {Component} from 'react'
import {Row, Input, Col} from 'react-materialize'

export default class BookForm extends Component {

    render() {
        const {book}=this.props.activeBook
        // const {showBook}=this.props.showBook
        return (
            <div className='container'>
                <Row >
                    <Col s={6}>
                        <Input label='Namess' s={6} defaultValue={book.name}/>
                        <Input label='Genree' s={6} defaultValue={book.genre}/>
                        <Input label='Author' s={6} defaultValue={book.author}/>
                    </Col>
                </Row></div>
        )
    }
}