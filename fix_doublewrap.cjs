const fs = require('fs');
const path = 'C:/Users/mgfa9/Project/personal-profile/index.html';

let html = fs.readFileSync(path, 'utf-8');

// Fix double-wrapped spans: <span x-text="$t('X')"><span x-text="$t('X')">TEXT</span></span>
// Keep outer, remove inner

for (let i = 0; i < 20; i++) {
  const before = html.length;
  
  // Pattern: <span x-text="..."><span x-text="...">...</span></span>
  html = html.replace(
    /<span\s+(x-text="\$t\('[^']+'\)")><span\s+\1>/g,
    '<span $1>'
  );
  
  html = html.replace(
    /<span\s+(x-html="\$t\('[^']+'\)")><span\s+\1>/g,
    '<span $1>'
  );
  
  if (html.length === before) break;
}

fs.writeFileSync(path, html);

const dw = (html.match(/<span[^>]*><span[^>]*\$t\(/g) || []).length;
console.log(`Double-wrap remaining: ${dw}`);

// Final verification
const bad = (html.match(/\\\$t\(/g) || []).length;
const good = (html.match(/(?<!\\)\$t\(/g) || []).length;
console.log(`Bad \\\$t: ${bad}, Good \$t(): ${good}`);
console.log(`Lines: ${html.split('\n').length}`);
