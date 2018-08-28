import { trigger, state, animate, transition, style, AnimationMetadata, query, stagger } from '@angular/animations';

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
      animate('.1s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('.1s', style({ opacity: 0, height: 0 }))
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

/**
 * NoOp
 */
