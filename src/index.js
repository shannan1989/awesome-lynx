import { appendFunction, prependFunction, shuffle, uuid } from './utils.js';

import { version } from '../package.json';

let lynx = {
    version: version,
    shuffle,
    uuid,
    appendFunction,
    prependFunction
};

console.info('You are using lynx v' + lynx.version);

export default lynx;
