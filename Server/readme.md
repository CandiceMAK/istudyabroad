## Run server

### Installation:
##### This project use JavaScript, Node.js, Ejs and MongoDB.
1. Download node.js and install it. (https://nodejs.org/en/)
2. Create .env in Server. Put the following inside >> 

DB_CONNECT=mongodb+srv://uexchange:uexchangepw@cluster0.aordy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=217190995206-11k4ib0o3aj6ht18uqcugecmsh0eqqrq.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
SECRET=MYSECRET

DB_CONNECT=mongodb+srv://uexchange:uexchangepw@cluster0.aordy.mongodb.net/Demo?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=217190995206-11k4ib0o3aj6ht18uqcugecmsh0eqqrq.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
SECRET=MYSECRET

### Steps:
1. Open Project in VScode
2. npm init
3. npm install express nodemon mongoose ejs dotenv
4. npm install passport passport-google-oauth20
5. npm i passport@0.3.2
6. npm install passport-local bcrypt
7. npm install cookie-session
8. npm install express-session connect-flash
9. npm install node-fetch@2
10. sudo npm install -g --force nodemon
11. nodemon index.js


setup exchange shop and transaction times 
setup filtering 
auto match up 
2FA

21470081@life.hkbu.edu.hk
Hello3333




4 Steps
1. create model 
2. create route
3. create .ejs ( layout )
4. add route in index.js
