# checkStream
checkStream is an async function that determines if an RTSP stream is running by using the ffprobe command to check for codec and duration information.

## Installation
To use checkStream, you will need to have ffmpeg installed on your system.

## Usage
```
const checkStream = require('checkStream');

async function main() {
  try {
    const result = await checkStream('rtsp://myStreamDomain.com:554/profile2/media.smp');
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
