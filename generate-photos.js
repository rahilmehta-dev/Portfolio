const fs   = require('fs');
const path = require('path');

const dir  = path.join(__dirname, 'capture_photos');
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

const files = fs.readdirSync(dir)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .sort()
    .map(f => ({ src: `capture_photos/${f}`, caption: '' }));

fs.writeFileSync(
    path.join(__dirname, 'photos-manifest.json'),
    JSON.stringify(files, null, 2)
);

console.log(`✓ ${files.length} photo(s) written to photos-manifest.json`);
