# Webpack Plugins


Webpack Plugin API is conformed basically by the Compiler and Compilation classes, each one present a different set of event hooks that in combination with the Tapable#plugins allows the user developer to attach logic to the webpack lifecycle.

Documentation about Plugin API can be found [here](https://webpack.js.org/api/plugins/).

The plugin API provides access to a Parser instance, internally webpack uses [acorn](https://github.com/ternjs/acorn). 
The code exposed below can be found [on this repo](https://github.com/ssaucedo/learning-webpack/tree/plugins), which includes a basic project setup. 


To show how easy is to implement custom plugins in the talk we wrote some implementations:

## CustomAssetPlugin 

This plugins adds a new asset with a name and content provided in the configuration.
RawSource is part of Webpack library, and was found looking on the code, there is no much documentation about webpack inner workings.  
 
Usage:    
```
 new CustomAssetPlugin({assetName: 'asset-name.txt', content: 'Asset content'}),

```

```
const RawSource = require("webpack-sources").RawSource;

function CustomAssetPlugin(options) {
  if(options){
    this.assetName = options.assetName
    this.content = options.content
  } else {
    throw new Error('You must provide a name and a content')
  }
}

CustomAssetPlugin.prototype.apply = function (compiler) {

  compiler.plugin('emit', function (compilation, callback) {
    console.log('emit')
    compilation.assets[this.assetName] = new RawSource(this.content)
    callback();
  }.bind(this));
};

module.exports = CustomAssetPlugin;

```


## AppendCodePlugin

This plugin adds the hardcoded comment 'this is an extra comment added on the plugin' at the end
of the first compilation module. It can be verified manually on the output assets after running `npm start` 
``` 

const RawSource = require("webpack-sources").RawSource;

function AppendCodePlugin(options) {

}

AppendCodePlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
        const module = compilation.modules[0]
        module._source._value += '// this is an extra comment added on the plugin';
        callback();
      }
    );
};

module.exports = AppendCodePlugin;

```

###Comment on Debugging

To debug the webpack process in the demo I used https://www.npmjs.com/package/webpack-webstorm-debugger-script which is just a little debug configuration script for webpack.

###More

Open issue: https://github.com/webpack/webpack.js.org/issues/169

Nice chart: http://imgur.com/a/JQIxm