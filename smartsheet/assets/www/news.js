/*
 * JS for news generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '5de207c0-0aed-498d-9596-bc4526dc6820';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "about",
    "location": "about.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "news",
    "location": "news.html"
}];

news_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_1': 'news_mobilelist_1',
        'mobilelistitem_2': 'news_mobilelistitem_2',
        'mobilelistitembutton_3': 'news_mobilelistitembutton_3',
        'mobilelistitem_4': 'news_mobilelistitem_4',
        'mobilelistitembutton_5': 'news_mobilelistitembutton_5',
        'mobilelistitem_6': 'news_mobilelistitem_6',
        'mobilelistitembutton_7': 'news_mobilelistitembutton_7'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'news';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    news_beforeshow = function() {
        Appery.CurrentScreen = "news";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_2DBB_onLoad = news_onLoad = function() {
        screen_2DBB_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        news_deviceEvents();
        news_windowEvents();
        screen_2DBB_elementsEvents();
    }

    // screen window events
    screen_2DBB_windowEvents = news_windowEvents = function() {
        $('#news').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    news_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_2DBB_elementsExtraJS = news_elementsExtraJS = function() {
        // screen (news) extra code

        /* mobilelist_1 */

        listView = $("#news_mobilelist_1");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#news_mobilelist_1 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_2 */

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

    }

    // screen elements handler
    screen_2DBB_elementsEvents = news_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#news_mobilecontainer [name="mobilelistitem_2"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.open('http://techcrunch.com/2013/09/17/smartsheet-adds-android-app-for-collaborative-spreadsheet-service-as-enterprise-warms-to-the-mobile-platform/', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');

                }
            },
        });

        $('#news_mobilecontainer [name="mobilelistitem_4"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.open('http://techcrunch.com/2013/02/25/crowdsourcing-developers-to-connect-apps-using-appirio-cloudspoke/', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');

                }
            },
        });

        $('#news_mobilecontainer [name="mobilelistitem_6"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'http://techcrunch.com/2012/12/03/cloud-based-project-management-and-collaboration-tool-for-the-enterprise-smartsheet-raises-26m/';

                }
            },
        });

    }

    $("#news").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        news_beforeshow();
    });

    if (runBeforeShow) {
        news_beforeshow();
    } else {
        news_onLoad();
    }

}

$("#news").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    news_js();
});