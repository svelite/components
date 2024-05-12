import { promises as fs } from 'fs';

async function copyFolderContents(source, destination) {
    try {
        // Read the contents of the source folder
        const files = await fs.readdir(source);
        
        // Iterate through the files and copy them to the destination folder
        for (const file of files) {
            const sourcePath = `${source}/${file}`;
            const destinationPath = `${destination}/${file}`;
            
            // Check if the current file is a directory
            const stats = await fs.stat(sourcePath);
            if (stats.isDirectory()) {
                // If it's a directory, create the directory in the destination and recursively copy its contents
                await fs.mkdir(destinationPath, { recursive: true });
                await copyFolderContents(sourcePath, destinationPath);
            } else {
                // If it's a file, copy it to the destination folder
                await fs.copyFile(sourcePath, destinationPath);
            }
        }
        
        console.log(`Contents of ${source} copied to ${destination} successfully.`);
    } catch (error) {
        console.error(`Error copying folder contents: ${error}`);
    }
}

fs.mkdir('./dist')
// Example usage:
const sourceFolder = 'src/lib';
const destinationFolder = 'dist';
copyFolderContents(sourceFolder, destinationFolder);
