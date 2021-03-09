import { Map } from 'immutable'
import * as actionTypes from './constants';
const defualtState = Map(
    {
        topBanners: [{name:'',picURL:'',id:''}]
    }
)

function reducer(state = defualtState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // return { ...state, topBanners: action.topBanners }
            return state.set("topBanners",action.topBanners)//会返回新的对象
        default:
            return state;
    }
}

export default reducer;