(function () {
  'use strict';


  /**
  * @categoryName PouchBD
  */
  this.cronapi.pouchdb = {};

  //Ref: https://pouchdb.com/
  /**
   * @type function
   * @name {{createDatabase}}
   * @description {{createDatabaseDescription}}
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.pouchdb.createDatabase = function (/** @type {ObjectType.STRING} @description {{databaseName}} */	dbName,  /** @type {ObjectType.STRING} @description {{adapterType}} @blockType util_dropdown @keys idb|websql|cordova-sqlite|memory|localstorage @values idb|websql|cordova-sqlite|memory|localstorage  */ adapterType) {
    let db = new PouchDB(dbName | 'myDB.db', { adapter: adapterType | 'idb' });
    return db;
  };



  //Ref: https://firebase.google.com/docs/reference/js/firebase.database
  /**
   * @type function
   * @name {{firebaseGetDatabase}}
   * @description {{firebaseGetDatabaseDescription}}
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.firebase.getDatabase = function (/** @type {ObjectType.STRING} @description {{firebaseOptionalAppName}} */	optionalAppName) {
    if (optionalAppName) return window.firebase.database(optionalAppName);
    return window.firebase.database();
  };

  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name {{firebaseAddData}}
   * @description {{firebaseAddDataDescription}}
   */
  this.cronapi.firebase.addData = function (/** @type {ObjectType.OBJECT} @description {{firebaseDatabase}} */	database, /** @type {ObjectType.STRING} @description {{firebasePath}} */ path, /** @type {ObjectType.OBJECT} @description {{firebaseData}} */ data) {
    database.ref(path).set(data);
  };


  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name {{firebaseAddOnEvent}}
   * @description {{firebaseAddOnEventDescription}}
   */
  this.cronapi.firebase.addOnEvent = function (/** @type {ObjectType.OBJECT} @description {{firebaseDatabase}} */	database, /** @type {ObjectType.STRING} @description {{firebasePath}} */ path, /** @type {ObjectType.STATEMENTSENDER} @description {{statement}} */ statement) {
    database.ref(path).on('value', function (snapshot) {
      statement(snapshot.val());
    })
  };


  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name {{firebaseAddOnceEvent}}
   * @description {{firebaseAddOnceEventDescription}}
   */
  this.cronapi.firebase.addOnceEvent = function (/** @type {ObjectType.OBJECT} @description {{firebaseDatabase}} */	database, /** @type {ObjectType.STRING} @description {{firebasePath}} */ path, /** @type {ObjectType.STATEMENTSENDER} @description {{statement}} */ statement) {
    database.ref(path).once('value').then(function (snapshot) {
      statement(snapshot.val());
    });
  };

  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name {{firebaseUpdateData}}
   * @description {{firebaseUpdateDataDescription}}
   */
  this.cronapi.firebase.firebaseUpdateData = function (/** @type {ObjectType.OBJECT} @description {{firebaseDatabase}} */	database, /** @type {ObjectType.STRING} @description {{firebasePath}} */ path, /** @type {ObjectType.OBJECT} @description {{firebaseData}} */ data) {
    database.ref(path).update(data);
  };


  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name {{firebasePushData}}
   * @description {{firebasePushDataDescription}}
   */
  this.cronapi.firebase.pushData = function (/** @type {ObjectType.OBJECT} @description {{firebaseDatabase}} */	database, /** @type {ObjectType.STRING} @description {{firebasePath}} */ path, /** @type {ObjectType.OBJECT} @description {{firebaseData}} */ data) {
    database.ref(path + '/' + database.ref(path).push().key).set(data);
  };



}).bind(window)();
