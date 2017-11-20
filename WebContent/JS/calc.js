//alert("verbunden");
//-------------------------------------------------------------------------------------------------------------------------
var create = function(tag) {
    return document.createElement(tag);
};
var getByID = function(id) {
        return document.getElementById(id);
    }
    /**
     * Gibt den aktuellen Monat als String und die volle Jahreszahl aus.
     */
function actMonthYear() {
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var monthArr = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
        'August', 'September', 'Oktober', 'November', 'Dezember'
    ];
    return monthArr[month] + ' ' + year;
}
getByID('heute').innerHTML = actMonthYear();