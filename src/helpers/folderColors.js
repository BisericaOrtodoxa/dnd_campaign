const folderColors = {
    'Players': '#8A784E',      // Brown
    'Sessions': '#4CAF50',     // Green  
    'Items': '#9C27B0',   // Purple
    'root': '#648DB3',      // Blue for root-level notes
    'default': '#666666'    // Fallback gray color
};

function getFolderColor(folderName) {
    if (!folderName || folderName === '' || folderName === 'root') {
        return folderColors['root'];
    }
    return folderColors[folderName] || folderColors['default'];
}

module.exports = { folderColors, getFolderColor };
