exports.partialRight = partialRight;

// Create a partially applied function that applies after the first argument. eg:
// var add = partialRight(_.reduce, function(memo, item) { return memo + item }, 0);
function partialRight(func){
	var args = Array.prototype.slice.call(arguments,1);
	return function(x){
		args.unshift(x);
		return func.apply(null, args);
	}
}

