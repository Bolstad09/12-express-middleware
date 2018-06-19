'use strict';

import BaseResource from './base-resource.js';

import storage from '../lib/storage/data-storage.js';
import uuid from 'uuid/v1';

class Cat extends BaseResource{

  constructor(config) {
    super(config);
    this.name = config && config.title || '';
    this.breed= config && config.breed || '';
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

export default Cat;