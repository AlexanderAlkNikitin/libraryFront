import React, {Component, PropTypes} from 'react'
import { NotificationManager} from 'react-notifications'
var user;
export default class Login extends Component {


    onLogin(e) {
        e.preventDefault();
         user = {
            username: e.target.login.value,
            password: e.target.pass.value
        }
        this.props.logine(user)
    }
    loginButton(){
        return (
            <ul className='right hide-on-med-and-down'>
                <div className='container'>
                    <a className='waves-effect waves-light btn modal-trigger offset-s12' href='#modal1'>Sign up</a>
                </div>
                {this.props.statusText?NotificationManager.error(this.props.statusText, 'Click me!', 5000, () => {
                    alert('callback');
                }):null}
            </ul>

        )
    }
    navBarContent(){
        return (
            <div>
                {this.props.token?
                    <div className='container'>
                        <h5 className='left'>Hi {user.username}</h5>
                    </div>
                    :this.loginButton()
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <nav>
                    <div className='nav-wrapper'>
                        {this.navBarContent()}
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>

                        <div id='modal1' className='modal col s3'>
                            <div className='modal-content'>
                                <div className='container'>
                                    <h4>Login form</h4>
                                    <div className='row'>
                                        <form className='col s12' onSubmit={::this.onLogin}>
                                            <div className='row'>
                                                <div className='input-field col s12'>
                                                    <input name='login' id='login' type='text'/>
                                                    <label htmlFor='login'>Login</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='input-field col s12' label='Password'>
                                                    <input name='pass' id='password' type='password'/>
                                                    <label htmlFor='password'>Password</label>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className='modal-action modal-close waves-effect waves-green btn-flat col s5 offset-s7'
                                                    type='submit'>Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*<div className='modal-footer'>   */}
                            {/*<a href='#!'*/}
                            {/*className=' modal-action modal-close waves-effect waves-green btn-flat'>Agree</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
Login.propsTypes = {
    logine: PropTypes.func.isRequired
}