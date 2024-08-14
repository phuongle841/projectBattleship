# projectBattleship

# init:

- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save-dev html-webpack-plugin
- npm install --save-dev style-loader css-loader
- mkdir src && cd src
- touch index.js index.html style.css
- cd .. && code .
- npm install --save-dev webpack-dev-server
- npm install --save-dev eslint @eslint/js
- npm install --save-dev webpack-merge
- touch eslint.config.js

- wget -O webpack.common.js https://raw.githubusercontent.com/phuongle841/projectWeatherApp/main/webpack.common.js
- wget -O webpack.dev.js https://raw.githubusercontent.com/phuongle841/projectWeatherApp/main/webpack.dev.js
- wget -O webpack.prod.js https://raw.githubusercontent.com/phuongle841/projectWeatherApp/main/webpack.prod.js
- touch .gitignore
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- touch babel.config.js
- npm install --save-dev jest

# instructions:

- each of ship have a list of coordinates saved by game board
- game board also have the list of previous hits
