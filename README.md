Connect mod rewrite sandbox
===========================

Testing BrowserSync's rewrite rules (using _connect-modrewrite_) can be a pain in the back,
this module uses the same mod rewriter and allows dynamic testing for the main project.

## Usage

* `npm i`
* `npm run dev` (you can use the `PORT` env var, default is 4100)
* open `http://localhost:4100/test`
* or open a test url manually, for example: `http://localhost:4100/hu-hu/profile`
