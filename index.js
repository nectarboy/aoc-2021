window.onload = function() {
    const date = new Date();

    const christmastreesize = (date.getMonth() === 11 && date.getFullYear() === 2021) ? new Date().getDate() : 30;

    const days = document.getElementById('days');
    const christmastree = document.getElementById('christmastree');

    var daystext = '';
    for (var i = 0; i < dayscompleted; i++) {
        var ip1 = i + 1;

        daystext += `<a class='Link' href="./${ip1}/index.html">day ${ip1}</a>`;
        if (ip1 !== dayscompleted) {
            daystext += '\n';
        }
    }

    var christmastreetext = ' '.repeat(christmastreesize - 1) + '♡\n';
    for (var i = 0; i < christmastreesize; i++) {
        var ip1 = i + 1;
        christmastreetext += ' '.repeat(christmastreesize - ip1) + '*'.repeat(2 * ip1 - 1) + '\n';
    }
    christmastreetext += ' '.repeat(christmastreesize - 1) + '|';

    days.innerHTML = daystext;
    christmastree.innerHTML = christmastreetext;
};