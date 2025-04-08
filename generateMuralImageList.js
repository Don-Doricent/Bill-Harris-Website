const fs = require('fs');
const path = require('path');

// Path to the folder containing portrait images
const directoryPath = path.join(__dirname, 'images/murals');

// Read the folder and generate the list of images
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter for image files only (jpg, png, jpeg, etc.)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Generate the array of file paths
    const imageList = imageFiles.map(file => `images/murals/${file}`);

    // Output the array as a string to the console
    console.log('Copy this array into your HTML/JS file:');
    console.log(JSON.stringify(imageList, null, 2));
});
