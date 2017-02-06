const config = require('./config');
const modRewrite = require('connect-modrewrite');
const app = require('express')();
const http = require('http').Server(app);
const locales = config.localesRex;
const rtlLocales = 'he-il';
let pages = config.pagesRex;
pages += '|' + pages.replace(/\|/g, '_rtl|') + '_rtl';
app.use(modRewrite([
  '^/$ /index.html [L]', // "/"
  '^/rtl/?$ /index_rtl.html [L]', // "/rtl" "/rtl/"
  `^/(${pages})/?$ /$1.html [L]`, // "/profile" "/profile_rtl" "/itinerary" "/itinerary_rtl"
  `^/(${rtlLocales})/(${pages})/?$ /$2_rtl.html [L]`, // not perfect, may work for most cases
  `^/(${locales})/(${pages})/?$ /$2.html [L]`, // "/hu-hu/profile" "/he-il/profile_rtl"
  `^/(${locales})/rtl/?$ /index_rtl.html [L]`, // "/he-il/rtl/"
  `^/(${rtlLocales})/?$ /index_rtl.html [L]`, // not perfect, may work for most cases
  `^/(${locales})/?$ /index.html [L]`, // "/he-il/"
  `^/fare-finder/.*?$ /fare-finder.html [L]` // "/fare-finder/bud/ltn/201611"
]));

// ----

app.get('/test', (req, res) => {
  const urls = config.testUrls;
  const lis = urls.map(url => `<li><a target="test" href="${url}">${url}</a></li>`).join('');
  res.send(`
    <html>
    <head>
      <title>connect modrewrite sandbox</title>
    </head>
    <body>
      <ul>${lis}</ul>
      <h2>Resolves to:</h2>
      <iframe name="test"></iframe>    
    </body>
    </html>
  `);
});

app.get(/.*/, (req, res) => { res.send(req.path); });

// ----

const port = process.env.PORT || 4100;
http.listen(port, function () {
  console.log(`listening on ${port}`);
});
