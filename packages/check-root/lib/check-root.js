'use strict';
const downgradeRoot = require('@check-root/downgrade-root');
const sudoBlock = require('@check-root/sudo-block');

function checkRoot(...arguments_) {
	try {
		downgradeRoot();
	} catch {}

	sudoBlock(...arguments_);
}

module.exports = checkRoot;
