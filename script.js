// JavaScript to fetch a new quote and update the display
const quoteElement = document.getElementById('quote');
const refreshButton = document.getElementById('refresh-btn');

// Array of example quotes (replace with API calls)
const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'In the middle of every difficulty lies opportunity. - Albert Einstein',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'The only thing we have to fear is fear itself. - Franklin D. Roosevelt',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson',
  'The best way to predict the future is to create it. - Peter Drucker',
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  'In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.',
  'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
  'Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill',
  'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde',
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
  'The best revenge is massive success. - Frank Sinatra',
  'Happiness is not something readymade. It comes from your own actions. - Dalai Lama',
  'If you want to lift yourself up, lift up someone else. - Booker T. Washington',
  'Life is really simple, but we insist on making it complicated. - Confucius',
  'The only true wisdom is in knowing you know nothing. - Socrates',
  'A person who never made a mistake never tried anything new. - Albert Einstein',
  'The only thing standing between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown',
  'Do not wait for leaders; do it alone, person to person. - Mother Teresa',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs',
  "Don't count the days, make the days count. - Muhammad Ali",
  "Opportunities don't happen. You create them. - Chris Grosser",
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  'The only thing standing between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
  'The harder I work, the luckier I get. - Samuel Goldwyn',
  'The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb',
  'A person who never made a mistake never tried anything new. - Albert Einstein',
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'In the middle of every difficulty lies opportunity. - Albert Einstein',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'The only thing we have to fear is fear itself. - Franklin D. Roosevelt',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson',
  'The best way to predict the future is to create it. - Peter Drucker',
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Display a random quote on page load
quoteElement.textContent = getRandomQuote();

// Update quote on button click
refreshButton.addEventListener('click', () => {
  quoteElement.textContent = getRandomQuote();
});
