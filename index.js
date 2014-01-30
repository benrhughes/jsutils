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

// returns 'count' items from 'array', starting at 'index'
function take(array, index, count){
	var result = [];

	if(index <= array.length && index >= 0)
		for(var i = index; i < index + count && i < array.length; i++)
			result.push(array[i]);

	return result;
}
