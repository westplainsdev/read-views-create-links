const fileService = require('./services/file.service');
const enumService = require('./services/enum.service');

console.log('\nInactivating file');
if (fileService.InactivateFile('applications')) {
    console.log('File has been moved');
} else {
    console.log('File failed to be moved');
}

console.log('\nActivating file');
if (fileService.ActivateFile('about')) {
    console.log('File is now ready to be viewed');
} else {
    console.log('File failed to activate');
}