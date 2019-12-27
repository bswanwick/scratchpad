import { Howl } from "howler";

// Get all files from the /samples directory
const context = require.context("../samples", true, /\.(wav|mp3)$/);

export interface SamplesByKey {
  [fileName: string]: Sample;
}
export interface Sample {
  filename: string;
  path: string;
  localRelativePath: string;
}

let SamplesByKey: SamplesByKey = {};
let Samples: Sample[] = [];

context.keys().forEach(function(key) {
  const sample: Sample = {
    filename: key.split("/").pop() || "KEY_SPLIT_ERROR",
    path: context(key),
    localRelativePath: key
  };
  SamplesByKey[sample.filename.split(".")[0]] = sample;
  Samples.push(sample);
});

export default Samples;
export { SamplesByKey };
