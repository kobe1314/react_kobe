export const onTestAdd = (num) => {
  return {
    type: 'ADD',
    num
  };
};
export const fetchData =() => {
   return (dispatch) => {
     new Promise(function(resolve,reject){
       setTimeout(resolve({fund_name:'HSBC',stype_name:'123444'}), 1000);
     }).then((resp) => {
       console.log(resp);
       dispatch({type:'FETCH_OBJ',payload:[{...resp}]});
     });
    };
};

export const fetchUserInfo = () => {
    return (dispatch) => {
      new Promise((resolve, reject) => {
        setTimeout(resolve({name:'kobe', age : 20}),1000);
      }).then((resp) => {
         dispatch({type:'USER_INFO', payload: [{...resp}]});
      });
    };
};