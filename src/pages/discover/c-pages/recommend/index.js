import React, { memo, useEffect } from 'react'
import { RecommendWrapper } from './style'
import LXLTopBanner from './c-cpns/top-banner'
function XLRecommend() {
    return (
        <RecommendWrapper>
            <LXLTopBanner/>
        </RecommendWrapper>
    )
}
export default memo(XLRecommend);