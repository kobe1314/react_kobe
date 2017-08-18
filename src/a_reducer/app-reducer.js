// ============================================
// ============================================
// Import modules

const initState = {
  inputvalue: 0, // 主页中决定显示哪一个子页
  // fetchvalue: [],
};

// ============================================
// action handling function

const actDefault = (state) => state;

const testAdd = (state, action) => {
  const { num } = action;
  return Object.assign({}, state, {
    inputvalue: num + 1,
  });
};

const reducerFn = (state = initState, action) => {
  switch (action.type) {
  // 进入主页时，初始化左边box数据
  case 'ADD':
    return testAdd(state, action);
  default:
    return actDefault(state, action);
  }
};

export default reducerFn;
