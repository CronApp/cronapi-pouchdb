(function () {
  'use strict';

  /**
  * @categoryName {{localDatabase}}
  */

  this.cronapi.pouchdb = {};

  //Ref: https://pouchdb.com/
  
  /**
   * @type function
   * @name {{createLocalDatabase}}
   * @description {{createLocalDatabaseDescription}}
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.pouchdb.createLocalDatabase = function (/** @type {ObjectType.STRING} @description {{databaseName}} */	dbName,  /** @type {ObjectType.STRING} @description {{adapterType}} @blockType util_dropdown @keys idb|websql|cordova-sqlite|memory|localstorage @values idb|websql|cordova-sqlite|memory|localstorage  */ adapterType) {
    let db = new PouchDB(dbName || 'myDB.db', { adapter: adapterType });
    return db;
  };

  /**
   * @type function
   * @name {{createRemoteDatabase}}
   * @description {{createRemoteDatabaseDescription}}
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.pouchdb.createRemoteDatabase = function (/** @type {ObjectType.STRING} @description {{databaseName}} */	dbName,/** @type {ObjectType.STRING} @description {{username}} */	username, /** @type {ObjectType.STRING} @description {{password}} */	password) {
    let options = {
      auth: {
        username: username,
        password: password
      }
    };

    let db = new PouchDB(dbName || 'myDB.db', options);
    return db;
  };

  /**
   * @type function
   * @name {{getDatabaseInfo}}
   * @description {{getDatabaseInfoDescription}}
   */
  this.cronapi.pouchdb.getDatabaseInfo = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db,  /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.info(function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{compactDatabase}}
  * @description {{compactDatabaseDescription}}
  */
  this.cronapi.pouchdb.compactDatabase = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{options}} */	options,  /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.compact(options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{deleteDatabase}}
  * @description {{deleteDatabaseDescription}}
  */
  this.cronapi.pouchdb.deleteDatabase = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.destroy(options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{updateDoc}}
  * @description {{updateDocDescription}}
  */
  this.cronapi.pouchdb.updateDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{doc}} */	doc, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    
    if(options == null) options = {};

    db.put(doc, options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{createDoc}}
  * @description {{createDocDescription}}
  */
  this.cronapi.pouchdb.createDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{doc}} */	doc, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.post(doc, options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{createDocLote}}
  * @description {{createDocLoteDescription}}
  */
    this.cronapi.pouchdb.createDocLote = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{docs}} */	docs, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
      db.bulkDocs(docs, options , function (err, response) {
        if (err) {
          statementError(err);
        } else {
          statementSuccess(response);
        }
      });
    };

  /**
  * @type function
  * @name {{putAttachment}}
  * @description {{putAttachmentDescription}}
  */
  this.cronapi.pouchdb.putAttachment = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.STRING} @description {{docId}} */	docId,/** @type {ObjectType.STRING} @description {{docRev}} */	docRev, /** @type {ObjectType.STRING} @description {{attachmentId}} */	attachmentId, /** @type {ObjectType.OBJECT} @description {{attachment}} */	attachment, /** @type {ObjectType.STRING} @description {{attachmentType}} */	attachmentType, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.putAttachment(docId, attachmentId, docRev, attachment, attachmentType, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{getAttachment}}
  * @description {{getAttachmentDescription}}
  */
  this.cronapi.pouchdb.getAttachment = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.STRING} @description {{docId}} */	docId, /** @type {ObjectType.STRING} @description {{attachmentId}} */	attachmentId, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.getAttachment(docId, attachmentId, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{removeAttachment}}
  * @description {{removeAttachmentDescription}}
  */
  this.cronapi.pouchdb.removeAttachment = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.STRING} @description {{docId}} */	docId, /** @type {ObjectType.STRING} @description {{attachmentId}} */	attachmentId,/** @type {ObjectType.STRING} @description {{docRev}} */	docRev, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.removeAttachment(docId, attachmentId, docRev, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
   * @type function
   * @name {{getDoc}}
   * @description {{getDocDescription}}
   */
  this.cronapi.pouchdb.getDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.STRING} @description {{docId}} */	docId, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.get(docId, options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
   * @type function
   * @name {{getAllDoc}}
   * @description {{getAllDocDescription}}
   */
  this.cronapi.pouchdb.getAllDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.allDocs(options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
   * @type function
   * @name {{notifyChanges}}
   * @description {{notifyChangesDescription}}
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.pouchdb.notifyChanges = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{statementChange}} */ statementChange, /**@type {ObjectType.STATEMENTSENDER} @description {{statementComplete}} */ statementComplete) {
    let changes = db.changes(options)
      .on('change', function (change) {
        statementChange(change);
      }).on('complete', function (info) {
        statementComplete(info);
      }).on('error', function (err) {
        statementError(err)
      });
    return changes;
  };

  /**
   * @type function
   * @name {{cancelNotifyChanges}}
   * @description {{cancelNotifyChangesDescription}}
   */
  this.cronapi.pouchdb.cancelNotifyChanges = function (/** @type {ObjectType.OBJECT} @description {{changesRef}} */	changesRef) {
    changesRef.cancel();
  };

  /**
  * @type function
  * @name {{deleteDoc}}
  * @description {{deleteDocDescription}}
  */
  this.cronapi.pouchdb.deleteDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.OBJECT} @description {{doc}} */	doc, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.remove(doc, options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
  * @type function
  * @name {{deleteDocById}}
  * @description {{deleteDocByIdDescription}}
  */
  this.cronapi.pouchdb.deleteByIdDoc = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /** @type {ObjectType.STRING} @description {{docId}} */	docId, /** @type {ObjectType.STRING} @description {{revId}} */	revId, /** @type {ObjectType.OBJECT} @description {{options}} */	options, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.remove(docId, revId, options, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
   * @type function
   * @name {{query}}
   * @description {{queryDescription}}
   */
  this.cronapi.pouchdb.query = function (/** @type {ObjectType.OBJECT} @description {{databaseRef}} */	db, /**@type {ObjectType.STATEMENTSENDER} @description {{statementMap}} */ statementMap, /**@type {ObjectType.STATEMENTSENDER} @description {{error}} */ statementError,  /**@type {ObjectType.STATEMENTSENDER} @description {{success}} */ statementSuccess) {
    db.query(statementMap, function (err, response) {
      if (err) {
        statementError(err);
      } else {
        statementSuccess(response);
      }
    });
  };

  /**
   * @type function
   * @name {{emit}}
   * @description {{emitDescription}}
   */
  this.cronapi.pouchdb.emit = function (/** @type {ObjectType.OBJECT} @description {{doc}} */	doc, /** @type {ObjectType.OBJECT} @description {{options}} */	options) {
    emit(doc, options)
  };

}).bind(window)();
