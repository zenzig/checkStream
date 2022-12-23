const { spawn } = require('child_process');

// Async function to check a stream using ffprobe
async function checkStream(url) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Spawn the ffprobe command with the given arguments
    const ffprobe = spawn('ffprobe', [
      '-v', 'error',
      '-show_entries', 'stream=codec_name,duration',
      '-of', 'default=noprint_wrappers=1',
      url,
    ]);

    // Initialize variables to track whether codec and duration information was found
    let codecsFound = false;
    let durationFound = false;

    // When data is received from ffprobe's stdout, check for codec and duration information
    ffprobe.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('codec_name')) {
        codecsFound = true;
        console.log('codecs: true');
      }
      if (output.includes('duration')) {
        durationFound = true;
        console.log('duration: true');
      }

    });

    // When ffprobe closes, check if codec and duration information was found
    ffprobe.on('close', (code) => {
      // If codec and duration information was found, resolve the Promise with true
      if (codecsFound && durationFound) {
        resolve(true);
      } else {
        // Otherwise, resolve the Promise with false
        resolve(false);
      }
      // Kill the ffprobe process
      ffprobe.kill();
    });

    // Set a timeout of 10 seconds
    setTimeout(() => {
      // If the timeout is reached, reject the Promise with an error
      reject(new Error('Timed out'));
    }, 20000);
  });
}

module.exports = checkStream;

