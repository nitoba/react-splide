import React, { ComponentProps, forwardRef } from 'react';
import { classNames } from '../../utils';


/**
 * The component for the track element.
 *
 * @since 0.7.0
 */

type Props = ComponentProps<'div'>
export const SplideTrack = forwardRef<any, Props>( ( { children, className, ...props }, ref ) => {
  return (
    <div ref={ref} className={ classNames( 'splide__track', className ) } { ...props }>
      <ul className="splide__list">
        { children }
      </ul>
    </div>
  );
} );

SplideTrack.displayName = "SplideTrack";

