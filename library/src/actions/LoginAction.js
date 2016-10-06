import axios from 'axios';

const URL = 'http://localhost:9080/appLibrary/';
function loginSuccess(data) {
    return {
        type:'LOGIN_SUCCESS',
        payload:data
    }
}
function loginFail(response) {
    console.log(response.error)
    return{
        type:'LOGIN_FAIL',
        payload:'Incorrect login or password'
    }
}
export  function logine(user) {
    return function (dispatch) {
        return axios({
            url:URL+'auth',
            responseType:'json',
            method:'post',
            data:{
                username:user.username,
                password:user.password
            }
        }).then(function (response) {
            console.log('no catch')
            dispatch(loginSuccess(response.data))
        }).catch(function (response) {
            dispatch(loginFail(response))

        })
    }
}

