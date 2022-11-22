'use strict';

/**
 * category-cpu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category-cpu.category-cpu');
