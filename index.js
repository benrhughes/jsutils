exports.partialRight = partialRight;

// Create partially applied underscore.js functions that take a list, eg 
// var add = partialRight(_.reduce, function(memo, item) { return memo + item }, 0);
function partialRight(func){
	var args = Array.prototype.slice.call(arguments,1);
	return function(list){
		args.unshift(list);
		return func.apply(null, args);
	}
}

