/**
 * Created by Administrator on 2017/5/19.
 */
import { connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

// /**
//  * Created by caozheng on 2017/1/4.
//  */
// import { createStore, applyMiddleware } from 'redux';
// import indexReduces from '../reducers/index';
//
// import {getSagaList} from './../sagas/index';
//
// // import logger from './../middleware/loggerMiddleWare';
// // import * as createLogger from 'redux-logger'
// import createSagaMiddleware  from 'redux-saga';
// // import thunkMiddleware from 'redux-thunk';
//
// const sagaMiddleware = createSagaMiddleware();
// const sagaRun = sagaMiddleware.run;
//
//
// const store = createStore(
//     indexReduces,
//     applyMiddleware(sagaMiddleware)
// );
//
//
// for(const saga in getSagaList) {
//     sagaRun( getSagaList[saga] )
// }
//
// export default store

export default createStore(reducers)