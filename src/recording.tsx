import React from 'react';

import Svg from 'react-native-svg';

export const Recording = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='recording'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
