import { trigger, state, animate, transition, style, AnimationMetadata, query, stagger, animateChild } from '@angular/animations';

/**
 * ROUTER ANIMATIONS
 */
export const fadeInAnimation: AnimationMetadata =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);

export const todoAnimation: AnimationMetadata =

  trigger('todoAnimation', [
    // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('.3s', style({ opacity: 0, height: 0 }))
    ])
  ]);

export const userPageAnimation: AnimationMetadata =
  trigger('userPageAnimation', [
    transition('* <=> *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger('50ms',
          // End animation
          animate('550ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)' })))
      ], { optional: true }),
      query(':leave', animate('50ms', style({ opacity: 0 })), { optional: true })
    ])
  ]);

export const foldListAnimation: AnimationMetadata =
  trigger('foldListAnimation', [
    transition('* => *', [
      query(`:leave`, [
        style({ overflow: 'hidden', display: 'block' }),
        stagger(50,
          animate('300ms 0ms ease-in-out', style({ height: '0px' })))
      ], { optional: true }),
      query(`:enter`, [
        style({ overflow: 'hidden', display: 'block', height: '0px' }),
        stagger(50,
          animate('300ms 0ms ease-in-out', style({ height: '*' })))
      ], { optional: true })
    ])
  ]);
