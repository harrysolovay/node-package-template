import {x} from '.';

describe('test block', () => {
  it('test', () => {
    expect.assertions(1);
    expect(x()).toStrictEqual('Hello World');
  });
});
