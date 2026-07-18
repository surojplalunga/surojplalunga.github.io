const CACHE_NAME = 'terminal-portfolio-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/manifest.webmanifest',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Newsreader:ital,wght@1,400;1,500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-dark.css',
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.11/katex.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
