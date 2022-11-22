'use strict';

/**
 * category-storage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category-storage.category-storage');
