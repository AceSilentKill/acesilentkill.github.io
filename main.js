//64or32.com | MIT License
!function () { var n; n = function () { function n(n) { return window.navigator.userAgent.indexOf(n) > -1 } var a = window.navigator.platform, t = ""; t = n("x86_64") || n("x86-64") || n("Win64") || n("x64;") || n("amd64") || n("AMD64") || n("WOW64") || n("x64_64") || "MacIntel" === a || "Linux x86_64" === a ? "arch64" : "Linux armv7l" === a || "iPad" === a || "iPhone" === a || "Android" === a || "iPod" === a || "BlackBerry" === a ? "mobile" : "Linux i686" === a ? "unknown" : "arch32", window.jscd.x64 = "arch64" === t }, "loading" != document.readyState ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", n) : document.attachEvent("onreadystatechange", function () { "loading" != document.readyState && n() }) }();

/* JavaScript Client Detection (C) viazenetti GmbH (Christian Ludwig) */
!function (s) { var i, n, e, o = "-", r = ""; screen.width && (r += "" + (width = screen.width ? screen.width : "") + " x " + (height = screen.height ? screen.height : "")); var d = navigator.appVersion, a = navigator.userAgent, t = navigator.appName, w = "" + parseFloat(navigator.appVersion), O = parseInt(navigator.appVersion, 10); -1 != (n = a.indexOf("Opera")) && (t = "Opera", w = a.substring(n + 6), -1 != (n = a.indexOf("Version")) && (w = a.substring(n + 8))), -1 != (n = a.indexOf("OPR")) ? (t = "Opera", w = a.substring(n + 4)) : -1 != (n = a.indexOf("Edge")) ? (t = "Microsoft Legacy Edge", w = a.substring(n + 5)) : -1 != (n = a.indexOf("Edg")) ? (t = "Microsoft Edge", w = a.substring(n + 4)) : -1 != (n = a.indexOf("MSIE")) ? (t = "Microsoft Internet Explorer", w = a.substring(n + 5)) : -1 != (n = a.indexOf("Chrome")) ? (t = "Chrome", w = a.substring(n + 7)) : -1 != (n = a.indexOf("Safari")) ? (t = "Safari", w = a.substring(n + 7), -1 != (n = a.indexOf("Version")) && (w = a.substring(n + 8))) : -1 != (n = a.indexOf("Firefox")) ? (t = "Firefox", w = a.substring(n + 8)) : -1 != a.indexOf("Trident/") ? (t = "Microsoft Internet Explorer", w = a.substring(a.indexOf("rv:") + 3)) : (i = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (t = a.substring(i, n), w = a.substring(n + 1), t.toLowerCase() == t.toUpperCase() && (t = navigator.appName)), -1 != (e = w.indexOf(";")) && (w = w.substring(0, e)), -1 != (e = w.indexOf(" ")) && (w = w.substring(0, e)), -1 != (e = w.indexOf(")")) && (w = w.substring(0, e)), isNaN(O = parseInt("" + w, 10)) && (w = "" + parseFloat(navigator.appVersion), O = parseInt(navigator.appVersion, 10)), /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(d); var W = !!navigator.cookieEnabled; void 0 !== navigator.cookieEnabled || W || (document.cookie = "testcookie", W = -1 != document.cookie.indexOf("testcookie")); var c = o, _ = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Chrome OS", r: /CrOS/ }, { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }]; for (var S in _) { var f = _[S]; if (f.r.test(a)) { c = f.s; break } } var x = o; switch (/Windows/.test(c) && (x = /Windows (.*)/.exec(c)[1], c = "Windows"), c) { case "Mac OS": case "Mac OS X": case "Android": x = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(a)[1]; break; case "iOS": x = (x = /OS (\d+)_(\d+)_?(\d+)?/.exec(d))[1] + "." + x[2] + "." + (0 | x[3]) }s.jscd = { os: c, osVersion: x } }(this);

window.downloadClient = function () {
    const log = document.getElementById('log');
    let fileName = getFileName();

    log.parentElement.parentElement.classList.remove('hide');
    pushLog(fileName);

    function pushLog(str) { log.textContent += `\n${str}`; log.scrollTop = log.scrollHeight; }
    function clearLog() { log.textContent = ''; }
    function getFileName() {
        function getVersion() {
            return '-6.4.0';
        }

        let plat = jscd.os.includes('Win') ? "win" : (jscd.os.includes('Mac') ? "mac" : "linux");
        let port; let arch; let ext;
        switch (plat) {
            case 'win':
                port = '-setup';
                arch = jscd.x64 ? '-x64' : '';
                ext = 'exe';
                break;
            case 'mac':
                port = '-portable';
                arch = '-x64';
                ext = 'dmg';
                break;
            case 'linux':
                port = '-portable';
                arch = jscd.x64 ? '-x86_64' : '-i386';
                ext = 'AppImage'
                break;
            default:
                break;
        }

        `PC7-${plat}${port}${getVersion()}${arch}.${ext}`;
    }
}
