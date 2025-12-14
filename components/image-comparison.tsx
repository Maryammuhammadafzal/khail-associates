'use client';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export default function ImageComparison() {
  return (
    <div className="w-full max-w-4xl p-8 mx-auto">
      <ReactCompareSlider className=''
        itemOne={
          <ReactCompareSliderImage
            src="/images/comparison-before.webp"
            alt="Under Construction"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/images/comparison-after.webp"
            alt="Completed Building"      
          />
        }
      />
    </div>
  );
}
