# angular-basic — Basic AngularJS

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:uodyne/angular-basic.git # or clone your own fork
cd node-js-sample
npm install
bower install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this experimental
web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


You can also take an existing Git repo and add a remote using the git URL provided when you created your app:

```
heroku git:remote -a ***name-app-heroku***
```

Remove back

```
git remote rm heroku
```

Info remote

```
git remote -v
```

Forze push 

```
git push heroku master
```

## Demo

http://basic-angularjs.darkant.com/


