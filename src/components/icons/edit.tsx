import React from 'react';

import Svg, { ISvgProps } from '../svg';

interface IEditProps extends ISvgProps {
  color?: string;
}

type Props = IEditProps & React.HTMLAttributes<SVGElement>;

{/* tslint:disable:max-line-length */}
const Edit: React.SFC<Props> = (props) => {
  return (
    <Svg width="38" height="39" viewBox="0 0 38 39" {...props}>
      <g color={props.color}>
        <path d="M23.800274730743354,7.645046097652881 l7.785782276247416,7.785709910950675 l-19.70796491414835,19.70796491414835 L4.0967240996961385,27.35301101180123 L23.800274730743354,7.645046097652881 zM37.493959832837405,5.767311377845577 l-3.472159302877844,-3.472159302877844 c-1.3418696974482371,-1.3418696974482371 -3.5207887822870676,-1.3418696974482371 -4.8672174934299175,0 l-3.3259814034632167,3.3259814034632167 l7.785782276247416,7.785782276247416 l3.8795759235235634,-3.8795759235235634 C38.53471753055086,8.486509768144609 38.53471753055086,6.808069075559029 37.493959832837405,5.767311377845577 zM0.022268432051985372,38.29645301129483 c-0.14169125101675295,0.6376829948721279 0.43404704984600784,1.2090793779304938 1.0718024100148758,1.0540005470168565 l8.675947791445108,-2.103586810932579 L1.9886506403656852,29.461156836428422 L0.022268432051985372,38.29645301129483 z"/>
      </g>
    </Svg>
  );
};

export default Edit;