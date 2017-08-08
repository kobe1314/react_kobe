import { createStore, applyMiddleware,compose } from 'redux';
import ReduxThunk from 'redux-thunk';	// 管理异步action的插件，为了解决某些问题
import RootReducer from '../a_reducer';
import DevTools from '../a_container/DevTools';

// ============================================
// Create store middlewares
// const loggerMiddleware = createLogger();
const enhancer = compose(
  //当有多个中间件的时候，一般会把logger放到最后面，中间件对位置很敏感
  applyMiddleware(ReduxThunk),
  //必须的！启用带有monitors（监视显示）的DevTools
  DevTools.instrument()
);

const store = createStore(RootReducer, enhancer);

export default store;
