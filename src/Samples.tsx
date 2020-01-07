import { Howl } from "howler";

interface SampleFile {
  filename: string;
  path: string;
}

class Sample {
  public fileinfo: SampleFile;
  public controls: any; // TODO this should be of type Howl, but @types/howler defines it as HowlStatic?
  constructor(sampleFile: SampleFile) {
    this.fileinfo = sampleFile;
    this.controls = new Howl({ src: sampleFile.path });
  }
}

// Get all audio files from the /samples directory
const sampleContext = require.context("./samples", true, /\.(wav|mp3)$/);

// Build the array of Sample objects
const Samples = sampleContext.keys().map(each => {
  return new Sample({
    filename: each.split("/").pop() || "KEY_SPLIT_ERROR",
    path: sampleContext(each)
  });
});

export default Samples;
