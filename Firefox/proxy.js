// Code injected into publishers pages

(function() {

var l = window.location,
    path = l.pathname,
    host = l.host;
if (!/pugwash.lib.warwick.ac.uk/.test(l.host)) {
    if (l.protocol === 'https:') {
        host = host.replace(/\./g, '-')
    }
    l.href = l.protocol + '//0-' + host + '.pugwash.lib.warwick.ac.uk' + path + l.search
}

})();
