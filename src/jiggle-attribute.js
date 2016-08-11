import snabbt from 'snabbt.js';
import {inject} from 'aurelia-framework';

@inject(Element)
export class JiggleCustomAttribute {
  constructor (element, taskQueue) {
	this.element = element;
  }

  attached () {
	snabbt(this.element, 'attention', {
	  rotation: [0, 0, Math.PI/2],
      springConstant: 1.9,
	  springDeceleration: 0.9,
	});
  }
}