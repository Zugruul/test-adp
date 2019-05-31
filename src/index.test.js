// load all js sources
const testsContext = require.context('./github', true, /\.js$/);
testsContext.keys().forEach(testsContext);
