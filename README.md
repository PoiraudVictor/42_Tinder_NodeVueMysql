# Tinder42

⚠️ DISCLAIMER: this project has been coded during a school rush of a month and a half, hence the code may be dirty and non optimised, some bugs may appear too. ⚠️

Building an Tinder like web app is the third project of the Web branch of Ecole 42 cursus.
I had the right to use the language I wanted but the use of frameworks (Node.js is a runtime, Express a micro framework and Vue.js/Vuex considered as a library), and NoSql
databases model were forbidden. 

### Built with
* Node.js
* Express
* Vue.js
* Vuex
* MySQL
* HTML/CSS

## Get it

### Prerequisites

I highly recommand to use homebrew if for the installation hereafter if you ar on OSX.
You need to have installed [Node.js](https://nodejs.org/en/) on the latest stable version, [MySQL](https://www.mysql.com/fr/) and npm.

### Modify the config file

* First of all go to mysql and create a tinder42_db db

```bash
mysql -u <your user> -p
```

```sql
CREATE DATABASE tinder42_db
```

* Further, import the new_tinder42_db.sql data into your mysql db

```bash
mysql -u <your user> -p tinder42_db < new_tinder42_db.sql
```

I leave you a sweet cheatsheet for Mysql : [Cheatsheet](https://devhints.io/mysql)
Make good use of it 🤙

### Launch the server

* Open two terminal windows, one at the root of mysql-api folder and the other one at the root of the vue folder.
  Then, run npm i in both windows to install the node dependencies and then start the servers.

mysql-api

```bash
npm i
npm run dev
```

vue

```bash
npm i
npm run build
npm run serve
```

## Get started

1. Change the nodemailer email credentials in mysql-api/server/controlers/usercontroler.js
2. In your browser, go to localhost:8081