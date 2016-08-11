import {bindable, computedFrom} from 'aurelia-framework';

export class RecursiveComponentCustomElement {
  @bindable parent = '';
  name = '';
  children = [];

  @computedFrom('parent', 'name')
  get fullname () {
	return this.parent
	  ? `${this.parent} -> ${this.name}`
	  : this.name;
  }

  addChild () {
	this.children.push({});
  }
}