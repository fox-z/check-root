'use strict';
const { isDocker, isRoot } = require('@check-root/utils');

function sudoBlock(message) {
	if (isRoot() && !isDocker()) {
		console.error(message);
		process.exit(77); // eslint-disable-line unicorn/no-process-exit
	}
}

module.exports = sudoBlock;
