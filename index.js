exports._partial = _partial;

// Create partially applied underscore.js functions that take a list
function _partial(_func, _funcArgs){
	var args = Array.prototype.slice.call(arguments,0);
	return function(list){
		args.shift();
		args.unshift(list);
		return _func.apply(null, args);
	}
}

