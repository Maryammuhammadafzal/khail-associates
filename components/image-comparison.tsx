'use client';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export default function ImageComparison() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/images/before.jpg"
            alt="Under Construction"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/images/after.jpg"
            alt="Completed Building"
          />
        }
      />
    </div>
  );
}
