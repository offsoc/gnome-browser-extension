// # SPDX-License-Identifer: GPL-3.0-or-later

m = chrome.i18n.getMessage;
i18n = (() => {
    $$('[data-i18n]').forEach((element) => {
        let data = element.dataset.i18n.split(',').map((value) => {
            value = value.trim();

            if (value.startsWith('__MSG_')) {
                return value.replace(/__MSG_(\w+)__/g, function (match, key) {
                    return key ? m(key) : "";
                });
            }

            return value;
        });

        if (data) {
            if (element.dataset.i18nHtml) {
                element.innerHtml = m(data[0], data.slice(1));
            }
            else {
                element.innerText = m(data[0], data.slice(1));
            }
        }
    });
});
