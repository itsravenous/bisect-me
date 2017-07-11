const { expect } = require('chai');
const { ratioSpread } = require('./index');

it('spreads values using ratios', () => {
  expect(ratioSpread(1000)).to.deep.equal([250, 750]);
});
