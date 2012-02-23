javascript:(function(){ 
	var match = document.location.hash.match(/(\/gdc\/md\/[a-z0-9]+\/)/i); 
	if (!match) {
		alert('GD project id not found.');
	}
	window.open(match[0], '_tab');
})();
