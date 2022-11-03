const script = document.createElement('script');
script.src = 'https://pastebin.com/raw/BAE0GeBY';

script.onload = function handle() {
    console.log("The script has loaded!")
    document.getElementById('box')
};

script.onerror = function error() {
    console.log('Error loading script!')
};

const framee = document.getElementById('box');

framee.appendChild(script);
