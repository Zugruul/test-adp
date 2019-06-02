// load all js sources
const testsContext = require.context('./', true, /\.js$/);
testsContext.keys().forEach(testsContext);
