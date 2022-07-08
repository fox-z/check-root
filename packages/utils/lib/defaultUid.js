const DEFAULT_UIDS = {
	darwin: 501,
	freebsd: 1000,
	linux: 1000,
	sunos: 100
};

function defaultUid(platform = process.platform) {
	return DEFAULT_UIDS[platform];
}

module.exports = defaultUid;