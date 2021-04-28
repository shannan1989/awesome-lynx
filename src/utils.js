export function shuffle (arr) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		let idx = Math.floor(Math.random() * (len - i));
		let temp = arr[idx];
		arr[idx] = arr[len - i - 1];
		arr[len - i - 1] = temp;
	}
	return arr;
}

export function uuid (len, radix) {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	let uuid = [], i;
	radix = radix || chars.length;

	if (len) {
		// Compact form
		for (i = 0; i < len; i++)
			uuid[i] = chars[0 | Math.random() * radix];
	} else {
		// rfc4122, version 4 form
		let r;

		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';

		// Fill in random data. At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return uuid.join('');
}

export function appendFunction (obj, key, func) {
	if (typeof obj[key] == 'function') {
		let oldfunc = obj[key];
		obj[key] = function () {
			oldfunc();
			func();
		};
	} else {
		obj[key] = func;
	}
	return obj[key];
}

export function prependFunction (obj, key, func) {
	if (typeof obj[key] == 'function') {
		let oldfunc = obj[key];
		obj[key] = function () {
			func();
			oldfunc();
		};
	} else {
		obj[key] = func;
	}
	return obj[key];
}
