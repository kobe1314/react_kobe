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

// function fetchFunction(state = initState, action) {
//     switch (action.type) {
//         case 'TEST::testFetch':
//             return testFetch(state, action);
//         default:
//             return state;
//     }
// };

const fetchFunction = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_OBJ':
            return testFetch(state, action);
        default:
            return state;
    }
};

export default fetchFunction;