javascript:(function(){ 
	var match = document.location.hash.match(/\/gdc\/projects\/([a-z0-9]+)/i); 
	if (!match) {
		alert('GD project id not found.');
		return;
	}
	window.open('/gdc/md/' + match[1], '_tab');
})();