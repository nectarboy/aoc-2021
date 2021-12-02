window.onload = function() {
    const dayscompleted = 2;

    const days = document.getElementById('days');
    const christmastree = document.getElementById('christmastree');

    var daystext = '';
    var christmastreetext = ' '.repeat(dayscompleted - 1) + '♡\n';
    for (var i = 0; i < dayscompleted; i++) {
        // days
        var ip1 = i + 1;
        daystext += `<a class='Link' href="./${ip1}/index.html">day ${ip1}</a>`;
        if (ip1 !== dayscompleted) {
            daystext += '\n';
        }

        // christmastree
        christmastreetext += ' '.repeat(dayscompleted - ip1) + '*'.repeat(2 * ip1 - 1) + '\n';
    }
    christmastreetext += ' '.repeat(dayscompleted - 1) + '|';

    days.innerHTML = daystext;
    christmastree.innerHTML = christmastreetext;
};