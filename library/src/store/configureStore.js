import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk';
// import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
    // const enhancer = compose(
    //     applyMiddleware(thunkMiddleware),
    //     devTools()
    // );
    const store = createStore(rootReducer, initialState,applyMiddleware(thunkMiddleware))

    if (module.hot) {
        module.hot.accept('../reducers', ()=> {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store

}