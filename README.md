# Project structure.

```sh
.
├── build
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
├── src
│   ├── App.js
│   ├── envSettings.json
│   ├── index.js
│   ├── server
│   │   └── server.prod.js
│   └── style.scss
└── webpack.config.js
```
# Install guide for development mode.
```sh
$ npm install
$ npm start
```

# Install guide for production mode.
```sh
$ npm ci
$ npm run prod
```

# Note
> ./src/envSettings.json file should be overwrite with neccassary environment.