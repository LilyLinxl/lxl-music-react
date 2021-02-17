import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'
function XLRecommend() {
    const {topBanners} = useSelector(state => ({topBanners: state.recommend.topBanners}));
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