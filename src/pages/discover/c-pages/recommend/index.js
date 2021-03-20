import React, { memo, useEffect } from 'react'
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style'
import LXLTopBanner from './c-cpns/top-banner'
import LXLHotRecommend from './c-cpns/hot-recommend'
import LXLRecommendRanking from './c-cpns/recommend-ranking'
import LXLNewAlbum from './c-cpns/new-album'

function XLRecommend() {
    return (
        <RecommendWrapper>
            <LXLTopBanner/>
            <Content>
                <RecommendLeft className="wrap-v2">
                    <LXLHotRecommend/>
                    <LXLRecommendRanking/>
                    <LXLNewAlbum/>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default memo(XLRecommend);