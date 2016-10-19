# Tiger-Form
Plugin for create form.

# 1 - Install Gulp
 
```sh
$ npm install --global gulp-cli
```
# 2 - Install json-server simulate API Jsron
```sh
  Link for information https://github.com/typicode/json-server 
  npm install -g json-server
```
# 3 - Server in localhost

```sh
$ gulp watch
```
# 4 - API Json in localhost

```sh
$ json-server --watch db.js --port 3002
```
## 5 - Usage

1. Include before of </body> jQuery:

	```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	```

2. Include before of </body> plugin's code:

	```html
	<script src="js/main.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").PluginName({
		'cor' : 'some color'
	});
	```