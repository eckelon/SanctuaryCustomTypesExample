const type = require('sanctuary-type-identifiers');
const {
  sanctuary: { isNothing, compose: B, chain, Nothing, Just }
  , sanctuaryDef: { NullaryType }
  , utils: { getNumber, getString }
} = require('../lib/fpUtils');

module.exports = NullaryType
('Provider')
('http://documentation.foo/api#Provider')
([])
(x => {
  if (type (x) !== 'Object') {
    return false;
  }

  const latency = getNumber('latency')(x);
  const name = B(chain(x => x === '' ? Nothing : Just(x)))(getString('name'))(x);

  if(isNothing(latency)) {
    return false;
  }

  if(isNothing(name)) {
    return false;
  }

  return true;
});


