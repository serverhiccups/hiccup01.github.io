<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
// URL query get function
var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));
// URL redirect code
var redirectURL = qs["go"];
if (redirectURL != "undefined" || "null") {window.location = redirectURL;}
