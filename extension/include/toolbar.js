// SPDX-License-Identifer: GPL-3.0-or-later

/*
 * Main object that handles toolbar icon.
 */
GSC.toolbar = (function () {
    /*
     * Initialization rutines.
     */
    function init() {
        chrome.storage.local.get(DEFAULT_LOCAL_OPTIONS, function (options) {
            if (options.useLightIcon) {
                setLightIcon();
            }
        });

        chrome.storage.onChanged.addListener(function (changes, areaName) {
            if (areaName === 'local' && changes.useLightIcon) {
                if (changes.useLightIcon.newValue) {
                    setLightIcon();
                }
                else {
                    setDarkicon();
                }
            }
        });
    }

    function setLightIcon() {
        chrome.browserAction.setIcon({
            path: {
                "16": "icons/GnomeLogo-light-16.png",
                "32": "icons/GnomeLogo-light-32.png"
            }
        });
    }

    function setDarkicon() {
        chrome.browserAction.setIcon({
            path: {
                "16": "icons/GnomeLogo-16.png",
                "32": "icons/GnomeLogo-32.png"
            }
        });
    }

    /*
     * Public methods.
     */
    return {
        init: init
    };
})();
