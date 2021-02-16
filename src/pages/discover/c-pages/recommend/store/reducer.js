import * as actionTypes from './constants';
const defualtState = {
    topBanners: []
}

function reducer(state = defualtState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state, topBanners: action.topBanners }
        default:
            return state;
    }
}

export default reducer;