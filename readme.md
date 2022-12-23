# checkStream

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zenzig/checkStream?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/zenzig/checkStream?color=3ded25&style=plastic)

checkStream is an async function that determines if an RTSP stream is running by using the ffprobe command to check for codec and duration information.

## Installation

To use checkStream, you will need to have nodejs and ffprobe installed on your system.

## NPM

```shell
$ npm i @zenzig/checkstream
```

## Usage

```
const checkStream = require('checkstream');

async function main() {
  try {
    const result = await checkStream('rtsp://demo:demo@ipvmdemo.dyndns.org:5541/onvif-media/media.amp?profile=profile_1_h264&sessiontimeout=60&streamtype=unicast');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
```

## Output

If codec and duration information is found in the stream, checkStream will return true. If the information is not found, or if the ffprobe command times out, checkStream will return false or throw an error, respectively.

## License

This project is licensed under the MIT License.
