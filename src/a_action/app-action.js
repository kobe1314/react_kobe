import _ from 'lodash';
import Fetchapi from '../util/fetch-api';

export default class AdviserActions {
  static onTestAdd(num) {
    return {
      type: 'TEST::add',
      payload: num + 1,
    };
  }

  static onTestAdd2(num) {
    return {
      type: 'TEST::add2',
      payload: num + 1,
    };
  }

  // 进入投顾主页时，初始化左边box数据
  static leftboxInit(obj) {
    var j = { org_id: 'P1000314', sort: '1'};
    // return (dispatch) => {
    //  new Promise(function(resolve,reject){
    //    resolve({fund_name:'kobe',stype_name:'12333'});
    //  });
    // };
    return {type:'TEST::testFetch',payload:[{fund_name:'kobe',stype_name:'12333'}]} ;
  }
}
