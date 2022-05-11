import React from 'react'
import SectionProductSliving from './body/section-product-sliving'
import SectionHelpMore from '../../components/help-more/section-help-more'
import SectionSwiperVideoSliving from './body/section-swiper-video-sliving'
import SectionPopularProductSliving from './body/section-popular-product-sliving'
const SmartHomePage = () => {
    return (
        <>
            <SectionPopularProductSliving/>
            <SectionProductSliving />
            <SectionSwiperVideoSliving />
            <SectionHelpMore/>
        </>
    )
}

export default SmartHomePage;