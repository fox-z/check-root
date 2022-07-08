'use strict';
const isDocker = require('./is-docker');

function isRoot() {
    return process.getuid && process.getuid() === 0;
}
module.exports = {
    isRoot,
    isDocker,
};
