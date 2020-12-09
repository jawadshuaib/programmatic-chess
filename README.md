This is boilerplate code to quickly setup a webpack and babel environment for javascript projects. The configuration is also setup to update the production files whenever the code is updated.

Note the environment setup also supports css. Webpack will output any css files to the index.html within the style tags for production. To use the css files in this manner, you must also import them into the javascript file (i.e. import '/.sample.css';). An example is provided in index.js

Once the repository is cloned, simply run the following commands:

> npm install

This will install all the dependencies listed in the <strong>package.json</strong>, including the node modules. Once installed, run this command:

> npm run serve

The above command will execute the babel module and use webpack to bundle all the modules into a single javascript file.

Production files are created in the <strong>/dist</strong> folder whereas all developer files (i.e. javascript files) should be entered in the <strong>/src</strong> folder. The webpack module will automatically take any files with .js and .css extension in this folder for production. Run the following command once to create production assets:

> npm run build
