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
	switch (month) {
	case 0:
		return "Januar " + year;
		break;
	case 1:
		return "Februar " + year;
		break;
	case 2:
		return "März " + year;
		break;
	case 3:
		return "April " + year;
		break;
	case 4:
		return "Mai " + year;
		break;
	case 5:
		return "Juni " + year;
		break;
	case 6:
		return "Juli " + year;
		break;
	case 7:
		return "August " + year;
		break;
	case 8:
		return "September " + year;
		break;
	case 9:
		return "Oktober " + year;
		break;
	case 10:
		return "November " + year;
		break;
	case 11:
		return "Dezember " + year;
		break;
	}
}
getByID('heute').innerHTML = actMonthYear();

function calcAllIncomings() {

}

function calcAllOutgoings() {

}

function calcIncomeTilNow(date) {

}

function calcOutgoingTilNow(date) {

}

function getEntryFromDB() {
	return null;
}

function setEntryToDB() {

}

function sumBankBalance() {

}
