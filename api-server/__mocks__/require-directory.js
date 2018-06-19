'use strict';

// import Cat from '..src/models/cat.js';
// import Dog from '..src/models/dog.js';
// export default (module, dir) => {
//   if ( typeof dir !== "string") (return {};)
//   return {
//     'cat': {default: cat},
//     'dog': {default: dog},

//   }
// }

import requireDirectory from 'require-directory';

export default requireDirectory;