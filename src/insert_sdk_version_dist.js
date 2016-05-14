var fs = require('fs');
var packageJson = require('../package');

var versionInfo = `/**
 * AndroidUI-WebApp v${packageJson.version}
 * ${packageJson.repository.url}
 */`;

var jsPath = '../dist/android-ui.js';
fs.writeFileSync(jsPath, versionInfo + '\n' + fs.readFileSync(jsPath));