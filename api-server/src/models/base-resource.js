'use strict';

import storage from '../lib/storage/data-storage.js';
import uuid from 'uuid/v1';

class BaseResource{

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default BaseResource;