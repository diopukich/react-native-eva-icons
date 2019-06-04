import React from 'react';

import Svg from 'react-native-svg';

export const MoreVerticalOutline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='more-vertical'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(-90 12 12)'
          opacity='0'
        />
        <Svg.Circle cx='12' cy='12' r='2' />
        <Svg.Circle cx='12' cy='5' r='2' />
        <Svg.Circle cx='12' cy='19' r='2' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
