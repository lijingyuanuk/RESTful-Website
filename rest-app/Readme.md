cd restweb
npm install

//Edit `restweb/config/settings.js` to set your database, user & password.

node tasks/reset # sets up the database
node web
open up http://localhost:3000

