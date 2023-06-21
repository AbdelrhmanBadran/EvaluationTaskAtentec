import { animate, state, style, transition, trigger } from "@angular/animations";

export const toggleFade = trigger('fade' , [
  state('valid' , style({
    opacity:1
  })),
  transition('inValid <=> valid' , animate(500)),
  state('inValid' , style({
    opacity:0
  }))
])
