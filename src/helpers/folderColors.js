const folderColors = {
    'players': '#8A784E',      // Brown
    'sessions': '#4CAF50',     // Green  
    'items': '#9C27B0',   // Purple
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
