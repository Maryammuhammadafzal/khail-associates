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
            src="/images/front page/TYPICAL F.jpg.jpeg"
            alt="Under Construction"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/images/front page/Umair Gulistan-1.jpeg"
            alt="Completed Building"      
          />
        }
      />
    </div>
  );
}
