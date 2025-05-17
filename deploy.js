

import fs from 'fs';
import path from 'path';

async function copyAndRenameFile(sourcePath, destinationPath, newFileName) {
    try {
        //const fileExtension = path.extname(sourcePath);
        const newPath = path.join(destinationPath, newFileName);

        await fs.promises.copyFile(sourcePath, newPath);
        console.log(`File copied and renamed successfully to: ${newPath}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}







/** NEXT */


// const fs = require('fs').promises;
// const path = require('path');

async function copyDir(src, dest) {
    try {
        await fs.promises.mkdir(dest, { recursive: true });
        const entries = await fs.promises.readdir(src, { withFileTypes: true });
        //const entries = fs.readdirSync('/path/to/directory');
        //console.log(entries);

        for (const entry of entries) {
            if (entry.name === 'index.html') { continue; }
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
                await copyDir(srcPath, destPath);
            } else {
                await fs.promises.copyFile(srcPath, destPath);
            }
        }
    } catch (error) {
        console.error(`Error copying directory: ${error}`);
        throw error;
    }
}

// Example usage:
async function main() {

    // Handle HTML
    const sourceFilePath = 'build/index.html';
    const destinationDirectory = '../auth-server/server/views';
    const newFileName = 'facelogin.ejs';
    copyAndRenameFile(sourceFilePath, destinationDirectory, newFileName);


    // Handle Assets
    const sourceDir = 'build';
    const destinationDir = '../auth-server/server/public';

    try {
        await copyDir(sourceDir, destinationDir);
        console.log('Directory copied successfully!');
    } catch (error) {
        console.error('Failed to copy directory.');
    }
}

main();