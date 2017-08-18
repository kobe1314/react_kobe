import _ from 'lodash';
import Fetchapi from '../util/fetch-api';

export default class AdviserActions {
  static onTestAdd(num) {
    return {
      type: 'TEST::add',
      payload: num + 1,
    };
  }

  // 进入投顾主页时，初始化左边box数据
  static leftboxInit() {
    return (dispatch) => {
     new Promise(function(resolve,reject){
       setTimeout(resolve({fund_name:'HSBC',stype_name:'123444'}), 1000);
     }).then((resp) => {
       console.log(resp);
       dispatch({type:'FETCH_OBJ',payload:[{...resp}]});
     });
    };
    // return {type:'TEST::testFetch',payload:[{fund_name:'kobe',stype_name:'12333'}]} ;
  }
}
export const onTestAdd = (num) => {
  return {
    type: 'ADD',
    payload : num+1
  };
};