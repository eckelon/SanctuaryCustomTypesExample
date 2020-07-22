'use strict';

const $ = require('sanctuary-def');
const { String, Object, Number, env, create: createDef } = $;
const { create, get, is } = require('sanctuary');
const S = create ({ checkTypes: true, env });

const getString = get(is(String));
const getObject = get(is(Object));
const getNumber = get(is(Number));

module.exports = { sanctuary: S, sanctuaryDef: $, utils: { getString, getObject, getNumber } };
