/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'PWA-General-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-fingerprint': '&#xe90d;',
		'icon-message': '&#xe90e;',
		'icon-calendar': '&#xe90a;',
		'icon-ramze-dovom': '&#xe90b;',
		'icon-update': '&#xe90c;',
		'icon-lock': '&#xe900;',
		'icon-bill-deposit': '&#xe901;',
		'icon-logout': '&#xe902;',
		'icon-map': '&#xe903;',
		'icon-chevron-down1': '&#xe904;',
		'icon-mobile': '&#xe905;',
		'icon-Notification': '&#xe906;',
		'icon-otp': '&#xe907;',
		'icon-user-v2': '&#xe908;',
		'icon-show': '&#xe930;',
		'icon-hide': '&#xe931;',
		'icon-close': '&#xe909;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
