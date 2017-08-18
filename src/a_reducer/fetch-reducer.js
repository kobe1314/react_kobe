const initState = {
    fetchvalue: []
};

const testFetch = (state, action) => {
    const { payload } = action;
    // return Object.assign({}, state, {
    //     fetchvalue: payload,
    // });
    console.log('*****' + { ...state,
        fetchvalue: payload
    });
    return { ...state,
        fetchvalue: payload
    };
};

const fetchFunction = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_OBJ':
            return testFetch(state, action);
        case 'USER_INFO':
            return {...state, fetchvalue: action.payload};
        default:
            return state;
    }
};

export default fetchFunction;