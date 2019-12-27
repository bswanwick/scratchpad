interface AllSamples {
  [key: string]: any;
}
var context = require.context("./samples", true, /\.(wav|mp3)$/);
debugger;
var allSamples: AllSamples = {};
context.keys().forEach(function(key) {
  debugger;
  allSamples[key] = context(key);
});

export default allSamples;
