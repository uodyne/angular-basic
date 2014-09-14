# angular-basic — Basic AngularJS

NodeJS
+ AngularJS
+ + RequireJS
+ + uiRouter
+ Express

## Demo

http://basic-angularjs.darkant.com/


## Running Locally
Make sure you have [Node.js](http://nodejs.org/) 

And Bower:
```
sudo npm install bower -g
```


```sh
git clone git@github.com:uodyne/angular-basic.git myApp
cd myApp
npm install & bower install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Heroku deploy

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

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
git push -f heroku master
```
