'use strict';

import { expect } from 'chai';
import sinon from 'sinon';
import _ from 'lodash';
import { after } from '../src';

describe('after', () => {
  let person, sandbox;

  class Person {
    constructor() {}

    @after(3)
    fn() {}
  }

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(_, 'after').returnsArg(1);

    person = new Person();
    person.fn();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call the function', () => {
    expect(_.after).to.have.been.calledWith(3, Person.prototype.fn);
  });
});