jQuery(document).ready(function ($) {
    // возвращает куки с указанным name,
    // или undefined, если ничего не найдено
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        

        document.cookie = updatedCookie;
    }

console.log(getCookie('privacy_policy'));

    if (getCookie('privacy_policy') === undefined) {
        document.getElementById('privacy_policy').style.display = '';
console.log(document.getElementById('privacy_policy'));
    }

    document.getElementById('privacy_policy_btn').addEventListener('click', function () {
        var date = new Date;
        date.setDate(date.getDate() + 1);
        setCookie('privacy_policy', 1, { expires: date });
        document.getElementById('privacy_policy').style.display = 'none';
    });

    });