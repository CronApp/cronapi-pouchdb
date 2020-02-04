'use strict';

const PouchDB = require('pouchdb');
window.PouchDB = PouchDB;

const { createLocalDatabase } = require('../pouchdb.cronapi');

test('Create a local database using pouchdb', () => {
    expect(createLocalDatabase('meudb', null)).not.toBe(null);
});
