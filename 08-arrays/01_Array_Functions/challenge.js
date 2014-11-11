module.exports.reversePlusOne = function (a){
	a.reverse().unshift(1);
	return a;
};

module.exports.plusesEverywhere = function (a){
	
	return a.join('+');
};

module.exports.arrayQuantityPlusOne = function (a){
	var number = a.length;
	arrayQuantityPlusOne =number+1;
	return arrayQuantityPlusOne;
};