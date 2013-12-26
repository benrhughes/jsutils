exports._partial = _partial;

function _partial(_func){
	var args = Array.prototype.slice.call(arguments,0);
	return function(list){
		args.shift();
		args.unshift(list);
		return _func.apply(null, args);
	}
}

