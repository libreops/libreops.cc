/* global moment */

$(document).ready(function() {
    'use strict';

    $.get('https://librenet.gr/public/libreops.atom', function (data) {
        var updates_html = ``;
        $(data).find('entry').each(function (i) {
            let item = $(this);
            let link = item.find('id').text();
            let title = item.find('title').text();
            var pubdate = moment(item.find('published').text()).fromNow();
            updates_html += `
                <li>
                    <div class="itemTitle">
                        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                        <a href="${link}" target="_blank">${title}</a>
                        <div class="events-date">${pubdate}</div>
                    </div>
                </li>`;
            return i<5;
        });
        $('#updates').html(updates_html);
    });

});
