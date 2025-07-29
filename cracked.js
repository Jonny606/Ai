function mobileCheck() {
    let jovianne = false;
    (function(haddi) {
        if (/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|ipad|up\.browser|up\.link|webos|wos)/i.test(haddi)) {
            jovianne = true;
        }
    }(navigator.userAgent || navigator.vendor || window.opera));
    return jovianne;
}
var isMobile = mobileCheck();
if (partner == "gdsub") {
    var allowed = false;
    if (document.referrer.indexOf("yeeteeyt.github.io") != -1) {
        allowed = true;
    } else {
        if (document.referrer.indexOf("telenorspill.no") != -1) {
            allowed = true;
        } else {
            if (document.referrer.indexOf("huz.com") != -1) {
                allowed = true;
            }
        }
    };
    if (!allowed) {
        alert("The game only works if it is embedded in an iframe on whitelisted websites.");
        throw new Error("The game only works if it is embedded in an iframe on whitelisted websites.");
    }
};
document.addEventListener("aip_consentapproved", function(richrd) {
    consentFinished = true;
});
document.addEventListener("aip_consentrejected", function(solach) {
    consentFinished = true;
});
var cmpImageAdded = false;
$(document).on("DOMNodeInserted", "div", function() {
    if (!cmpImageAdded && $(this).prop("id") == "cmplanguage") {
        $("#cmpbox .cmpboxcontent").prepend('<center><img src="' + siteUrl + 'images/cookiesInfo.png" style="width:30%"></center>');
        cmpImageAdded = true;
        $(document).off("DOMNodeInserted", "div");
    }
});
if (typeof PokiSDK !== "undefined" && typeof PokiSDK.init !== "undefined") {
    PokiSDK.init().then(function() {
        pokiEnabled = true;
        console.log("PokiSDK initialized");
        PokiSDK.gameLoadingStart();
        $("#ac1").css({
            "margin-top": "50px"
        });
        var davon = document.getElementById("ac1");
        if (!isMobile) {
            PokiSDK.displayAd(davon, "300x250");
        } else {
            PokiSDK.displayAd(davon, "320x50");
        }
    }).catch(function(elexsis) {
        console.error(elexsis);
    });
    PokiSDK.setDebug(false);
};
$.ajax({
    type: "GET",
    url: siteUrl + "api/system.php",
    dataType: "json",
    async: true,
    xhrFields: {
        withCredentials: true
    },
    success: function(ruhaan) {
        if (ruhaan.success) {
            window.userLang = ruhaan.userLang;
            if (getCookie("lang") != null) {
                window.userLang = getCookie("lang");
            };
            window.serverTime = ruhaan.time;
            window.cdnList = ruhaan.cdnList;
            window.cdnServer = ruhaan.cdnServer;
            window.clientCountryCode = ruhaan.clientCountryCode;
            window.clientCountry = ruhaan.clientCountry;
            window.clientContinent = ruhaan.clientContinent;
            if (ruhaan.halloweenTime == true) {
                window.halloweenTime = true;
                $("#loading").css({
                    "background-image": 'url("' + siteUrl + '/images/halloween_bg.jpg")'
                });
            };
            if (ruhaan.christmasTime == true) {
                window.christmasTime = true;
                $("#loading").css({
                    "background-image": 'url("' + siteUrl + '/images/winter_bg.jpg")'
                });
            };
            var dewane = 0;
            for (var ameliamae = 0; ameliamae < ruhaan.loadScripts.length; ameliamae++) {
                var jaymes = siteUrl + ruhaan.loadScripts[ameliamae];
                var tikeya = false;
                if (jaymes.indexOf(".css") !== -1) {
                    tikeya = true;
                };
                if (jaymes.indexOf("getDictionary.php") !== -1) {
                    jaymes += "?lang=" + window.userLang + "&" + ruhaan.lastModified;
                } else {
                    jaymes += "?" + ruhaan.lastModified;
                };
                console.log("Loading: " + jaymes);
                var keaka = {};
                if (tikeya) {
                    keaka = document.createElement("link");
                    keaka.id = jaymes;
                    keaka.rel = "stylesheet";
                    keaka.type = "text/css";
                    keaka.href = jaymes;
                    keaka.media = "all";
                    keaka.async = false;
                    document.head.appendChild(keaka);
                } else {
                    keaka = document.createElement("script");
                    keaka.src = jaymes;
                    keaka.async = false;
                    document.head.appendChild(keaka);
                };
                keaka.onerror = function() {
                    alert("cannot load file: " + jaymes);
                };
                keaka.onload = function(sekai) {
                    dewane++;
                    $("html").css({
                        "background-size": dewane / ruhaan.loadScripts.length * 75 + "px"
                    });
                    if (typeof this.href != "undefined") {
                        console.log("Loaded: " + this.href);
                    } else {
                        console.log("Loaded: " + this.src);
                    };
                    if (dewane == ruhaan.loadScripts.length) {
                        setTimeout(function() {
                            loaderFinished(ruhaan);
                        }, 1e3);
                    }
                };
            }
        } else {
            alert("error loading game data");
        }
    }
});
var siteHide = [];

function loaderFinished(teresa) {
    console.log("Finished loading scripts");
    translatePage();
    $("body").show().css({
        background: "black"
    });
    setTimeout(loading, 100);
    reloadLanguageSelect(teresa.langs);
    if (isMobile) {
        gameZoom = 1.5;
    };
    if (typeof partner !== "undefined") {
        if (partner == "poki") {
            siteHide.premiumFeatures = true;
            siteHide.social = true;
            siteHide.outgoingLinks = true;
        } else {
            if (partner == "gd") {
                siteHide.premiumFeatures = true;
                siteHide.social = true;
                siteHide.outgoingLinks = true;
            } else {
                if (partner == "yandex") {
                    siteHide.premiumFeatures = true;
                    siteHide.social = true;
                    siteHide.outgoingLinks = true;
                } else {
                    if (partner == "gdsub") {
                        siteHide.premiumFeatures = true;
                        siteHide.social = true;
                        siteHide.outgoingLinks = true;
                    } else {
                if (partner == "github") {
                    siteHide.premiumFeatures = true;
                    siteHide.social = true;
                    siteHide.outgoingLinks = true
                }
            }
        }
    };
    hideElements();
}

function hideElements() {
    if (siteHide.social) {
        $('[data-tag="social"]').hide();
    };
    if (siteHide.account) {
        $('[data-tag="account"]').hide();
    };
    if (siteHide.premiumFeatures) {
        $('[data-tag="premium"]').hide();
    };
    if (siteHide.outgoingLinks) {
        $('[data-tag="outgoing-link"]').hide();
    }
}

function getCookie(meriwether) {
    var joelia = meriwether + "=";
    var mareda = document.cookie.split(";");
    for (var chia = 0; chia < mareda.length; chia++) {
        var zenaiya = mareda[chia];
        while (zenaiya.charAt(0) == " ") {
            zenaiya = zenaiya.substring(1, zenaiya.length);
        };
        if (zenaiya.indexOf(joelia) == 0) {
            return zenaiya.substring(joelia.length, zenaiya.length);
        }
    };
    return null;
}
