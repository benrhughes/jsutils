jsutils
=======
An NPM package with some util functions I use

This package has not been published to NPM because it's young, and will likely be pretty eclectic. If you want it, you can

	npm install git+https://github.com/benrhughes/jsutils.git


## partialRight

This function is like underscore.js's `partial`, except that the args are applied after the first argument. That is:

	_.partial(f, g) => function(x){ return f(g, x) }
	partialRight(f, g) => function(x){ returns f(x, g) }

	_.partial(f, g, h) => function(x){ return f(g, h, x) }
	partialRight(f, g, h) => function(x) { return f(x, g, h) }
	
This is particularly useful for parial application with underscore functions.  Unfortunately underscore idiomatically takes a collection as the first agument. In most cases, if you want to parially apply an underscore function, you want to specify the collection last.

For example, 

* you have an iteractor function `myFunc`
* you want to partially apply `myFunc` to `_.map` to create `myMap`
* at a later date, you will call `myMap(list)`

You can't use underscore's `partial` to do this, because it only 
allows the setting of the first argument (the list). With `partialRight`, you can do this:

	var myMap = partialRight(_.map, myFunc);

You can apply `partialRight` to underscore functions that take multiple
arguments, for example:

	var add = partialRight(_.reduce, function(memo, item) { return memo + item }, 0);
	add([1,2,3,4,5]); // => 15

## take
`take(array, index, count)` returns a contiguous set of values from an array, starting at a given index. It does not modify the original array. For example:

    var array = ['a', 'b', 'c', 'd', 'e'];
    var taken = take(array, 1, 3) // => ['b', 'c', 'd']
