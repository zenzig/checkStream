// Import the checkStream function from the checkStream module
const checkStream = require('./checkstream'); 
async function main() {
  try {
    // Call the checkStream function with a given RTSP URL and store the result in a variable
    const result = await checkStream('rtsp://demo:demo@ipvmdemo.dyndns.org:5541/onvif-media/media.amp?profile=profile_1_h264&sessiontimeout=60&streamtype=unicast');
    // Print the result to the console
    console.log(result);
    // If the error message is "Timed out", print a custom error message
  } catch (error) {
    if (error.message === 'Timed out') {
      console.error('The operation timed out');
    } else {
      // Otherwise, print the error message
      console.error(error.message);
    }
  }
}
// Call the main function
main();
