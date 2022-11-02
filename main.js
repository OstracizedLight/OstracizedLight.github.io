const script = document.createElement('script');

script.setAttribute(
    'src',
    'https://pastebin.com/raw/BAE0GeBY',
);
script.setAttribute('async', '');

script.onload = function handleScriptLoaded() {
    console.log('script has loaded');
    document.getElementById('box').textContent = 'Script loaded successfully';
};

script.onerror = function handleScriptError() {
    console.log('error loading script');
};

document.head.appendChild(script);
