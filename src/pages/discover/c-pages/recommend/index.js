import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'
function XLRecommend() {
    const {topBanners} = useSelector(state => ({topBanners: state.getIn(["recommend","topBanners"])}), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    return (
        <div>
            {topBanners.length}
        </div>
    )
}
export default memo(XLRecommend);