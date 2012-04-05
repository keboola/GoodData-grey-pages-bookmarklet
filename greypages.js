(function(window){

	var gdPid = document.location.hash.match(/\/gdc\/projects\/([a-z0-9]+)/i);
	if (!gdPid || !gdPid[1]) {
		alert('GD project id not found.');
		return;
	}
	gdPid = gdPid[1];

	function requireJQuery(onLoad) {
		if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
			var done = false;
			var script = document.createElement("script");
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
			script.onload = script.onreadystatechange = function(){
				if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done = true;
					window.jQuery.noConflict();
					onLoad(window.jQuery);
				}
			};
			document.getElementsByTagName("head")[0].appendChild(script);
		} else {
			onLoad(window.jQuery);
		}
	}

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


	// widget init
	requireJQuery(function($) {

		if ($(window).data('goodDataGreyPagesBookmarletLoaded')) {
			$('#goodDataGreyPagesBookmarlet').show();
			return;
		}

		// stylesheet
		$('head').append($('<style></style>', {
			"type": "text/css",
			"text": "\
					#goodDataGreyPagesBookmarlet { \
						position: absolute; \
						z-index: 9999; \
						left: 50%; \
					} \
					"
		}));

		var container = $('<div id="goodDataGreyPagesBookmarlet" class="gdc-menu-dark"><ul></ul></div>');

		var list = container.find('ul');
		list.append('<li class="mi label noHover">'
			+ '<a><span title="Project maintenace">Project maintenance</span></a>' +
			'</li>');
		
		$.each(urls, function(index, action) {
			list.append($('<li><a href="' + action.url + '" target="_blank">' + action.title + '</a></li>'));
		});

		$('body').prepend(container);

		$('body').click(function() {
			container.hide();
		});

		container.click(function(event) {
			event.stopPropagation();
		});

		container.delegate('a', 'click', function() {
			container.hide();
		});

		$(window).data('goodDataGreyPagesBookmarletLoaded', true);

	});

//	window.open('/gdc/md/' + match[1], '_tab');
})(window);