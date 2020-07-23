// const Provider = require('./types/provider');
const Provider = require('./types/providerEasier');
const { sanctuary: { I }, sanctuaryDef: { env, create: createDef} } = require('./lib/fpUtils');

const def = createDef ({ checkTypes: true , env: env.concat ([Provider])});

/**
 * dummyOpWithProvider :: Provider -> Provider
 *
 * it returns the same Provider
 */
const dummyOpWithProvider = def ('dummyOpWithProvider')
    ({})
    ([Provider, Provider])
    (I);

const provider = dummyOpWithProvider({ name: 'provider', latency: 10 });
console.log(provider);

try {
    dummyOpWithProvider({ name: '', latency: 10 });
} catch(reason) {
    console.log(reason);
}

try {
    dummyOpWithProvider({ name: 'provider' });
} catch(reason) {
    console.log(reason);
}
