jsutils
=======
An NPM package with some util functions I use

This package has not been published to NPM because it's young, and will likely be pretty eclectic. If you want it, you can

	npm install git+https://github.com/benrhughes/jsutils.git


## \_partial

This is a helper method for parial application with underscore functions.  Unfortunately underscore (and lodash) idiomatically take a collection as their first agument. In most cases, if you want to parially apply an underscore function, you want to specify the collection last.

For example, 

* you have an iteractor function `myFunc`, and 
* you want to partially apply `_.map` with `myFunc` to create `myMap`
* at a later date, you will call `myMap(list)`

You can't use underscore's `partial` to do this, because it only 
allows the setting of the first argument (the list). With `_partial`, you can do this:

	var myMap = _partial(_.map, myFunc);

You can apply `_partial` to underscore functions that take multiple
arguments, for example:

	var add = _partial(_.reduce, function(memo, item) { return memo + item }, 0);
	add([1,2,3,4,5]); // => 15

