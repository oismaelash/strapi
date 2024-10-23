'use strict';

const sanitize = require('./sanitize');

const getService = (name) => {
  return strapi.plugin('users-permissions').service(name);
};

const getLinkedInScope = async () => {
  const config = await getService('providers').getConfig('linkedin');
  return config.scope.split(',').map((scope) => scope.trim());
};

module.exports = {
  getService,
  sanitize,
  getLinkedInScope,
};
