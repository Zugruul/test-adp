// load all js sources
const testsContext = require.context('./components/github', true, /\.js$/);
testsContext.keys().forEach(testsContext);
