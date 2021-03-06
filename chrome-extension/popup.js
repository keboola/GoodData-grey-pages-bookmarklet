var gdPid;

chrome.tabs.query({active:true}, function(tabs) {
	var gdPid = tabs[0].url.match(/\/gdc\/projects\/([a-z0-9]+)/i);
	if (!gdPid || !gdPid[1]) {
		alert('GD project id not found.');
		return;
	}
	gdPid = gdPid[1];
	
	var greyPagesUrl = '/gdc/md/' + gdPid;
	var urls = [
		{
			"title": "Go to grey pages",
			"url": greyPagesUrl
		},
		{
			"title": "Validate project",
			"url": greyPagesUrl + '/validate'
		},
		{
			"title": "Export project",
			"url":  greyPagesUrl + '/maintenance/export'
		},
		{
			"title": "Import project",
			"url": greyPagesUrl + '/maintenance/import'
		},
		{
			"title": "Execute MAQL",
			"url": greyPagesUrl + '/ldm/manage'
		}
	];

	var container = document.getElementById('goodDataGreyPagesBookmarlet');
	
	for (var i=0; i<urls.length;i++) {
		var item = document.createElement('li');
	
		var link = document.createElement('a');
		link.setAttribute('title', urls[i].title);
		link.setAttribute('href', 'https://secure.gooddata.com' + urls[i].url);
		link.setAttribute('target', '_blank');
		link.innerHTML = urls[i].title;
		
		item.appendChild(link);
		
		container.childNodes[0].appendChild(item);
	}

});