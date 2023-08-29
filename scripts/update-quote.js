const fs = require('fs');

const QUOTES = [
  'Quote 1: The only way to do great work is to love what you do. - Steve Jobs',
  'Quote 2: In the middle of every difficulty lies opportunity. - Albert Einstein',
  "Quote 3: Believe you can and you're halfway there. - Theodore Roosevelt",
];

const newQuote = QUOTES[new Date().getDay() % QUOTES.length];

const scriptContent = `const quote = '${newQuote}';
document.getElementById('quote').textContent = quote;
`;

fs.writeFileSync('script.js', scriptContent, 'utf-8');
