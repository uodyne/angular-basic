# angular-basic — Basic AngularJS

NodeJS
+ AngularJS
+ + RequireJS
+ + uiRouter
+ Express

## Demo

http://desolate-journey-8025.herokuapp.com/


## Running Locally
Make sure you have [Node.js](http://nodejs.org/) 

And Bower. If not:
```sh
sudo npm install bower -g
```

### Installation

```sh
git clone git@github.com:uodyne/angular-basic.git myApp
cd myApp
npm install & bower install
```
### Run

```sh
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Heroku deploy

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this experimental
web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


You can also take an existing Git repo and add a remote using the git URL provided when you created your app:

```sh
heroku git:remote -a ***name-app-heroku***
```

Remove back

```sh
git remote rm heroku
```

Info remote

```sh
git remote -v
```

Forze push 

```sh
git push -f heroku master
```

[ ![Codeship Status for uodyne/angular-basic](https://codeship.io/projects/79b9cb10-1e6c-0132-0c4f-7a12a542bc63/status)](https://codeship.io/projects/35530)
