const fs = require('fs');
const path = require('path');

// Path to the folder containing your images
const directoryPath = path.join(__dirname, 'images/paintings');

// Helper function to get the base name without extensions or prefixes
function getBaseName(fileName) {
    return fileName.replace(/_mini|^x/, '').replace(/\.\w+$/, '');
}

// Read the folder and generate the list of images
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter for image files only (jpg, png, jpeg, etc.)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Use a Set to store unique base names
    const seen = new Set();
    const uniqueImageFiles = [];

    for (const file of imageFiles) {
        const baseName = getBaseName(file);
        if (!seen.has(baseName)) {
            seen.add(baseName);
            uniqueImageFiles.push(file);
        }
    }

    // Generate the array of file paths
    const imageList = uniqueImageFiles.map(file => `images/paintings/${file}`);

    // Output the array as a string to the console
    console.log('Copy this array into your HTML/JS file:');
    console.log(JSON.stringify(imageList, null, 2));
});
