const {  sanctuaryDef: { NamedRecordType, NonEmpty, String, FiniteNumber } } = require('../lib/fpUtils');

//    Provider :: Type
const Provider = NamedRecordType
  ('Provider')
  ('http://example.com/my-package#Provider')
  ([])
  ({ name: NonEmpty(String), latency: FiniteNumber });

module.exports = Provider;
