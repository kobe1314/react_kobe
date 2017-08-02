import { createStore, applyMiddleware,compose } from 'redux';
import ReduxThunk from 'redux-thunk';	// 管理异步action的插件，为了解决某些问题
import RootReducer from '../a_reducer';
import DevTools from '../a_container/DevTools';

// ============================================
// Create store middlewares

const enhancer = compose(
  //你要使用的中间件，放在前面
  applyMiddleware(ReduxThunk),
  //必须的！启用带有monitors（监视显示）的DevTools
  DevTools.instrument()
);

const store = createStore(RootReducer, enhancer);

export default store;
