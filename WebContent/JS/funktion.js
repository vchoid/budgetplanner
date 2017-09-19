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

var titleArray = [];
/**
 * Erstellt eine Var mit der Anzahl der Zeichen einer Zeile. Erstellt eine
 * temporäe Var zum zwischenspeichern der einzelne Wörter Erstellt eine
 * ZählerVar zum speichern der Wörter in ein Array.
 * Die For-Schleife läuft die Länge Zeile ab (tLenght) und ließt alle Zeichen.
 * Überprüft bei jedem Zeichen ob es sich um ein ';' handelt.
 * Bei false -> speichert das Zeichen der Stelle 'i' in die Var tmp und hängt immer wieder hinten an.
 * Bei true -> speichert alle Zeichen bis dahin in ein Array an der Position 'j' und leert die tmp-Var.
 * @param row
 * @returns {Array}
 */
function createHeaderArray(row) {
	var tLenght = row.length;
	var tmp = '';
	var j = 0;
	for (var i = 0; i < tLenght; i++) {
		if (row[i] === ';') {
			titleArray[j] = tmp;
			tmp = '';
			j++;
			continue;
		} else {
			tmp += row[i];
		}
	}
	return titleArray;
}
/**
 * Fordert eine Datei an und ließt die erste Zeile einer CSV-Datei und speichert
 * diese als Kopfzeile einer Tabelle.
 */
function loadCSVHeader() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var head = createHeaderArray(this.responseText);
			createTableHeader(head);
		}
	};
	xhttp.open("GET", "../Haushaltbuch/header.csv", true);
	xhttp.send();
}
/**
 * Erstellt aus einem Array, Kopfzeilen einer Tabelle.
 * 
 * @param headArr
 */
function createTableHeader(headArr) {
	for (var i = 0; i < headArr.length; i++) {
		var th = create('th');
		getByID('head').appendChild(th);
		th.innerHTML = headArr[i];
	}
}


// ----- test Variablen -----------------------
var i = 0;
var euro = 12;
function setOneEntry() {
	var date = actMonthYear();
	var tdDate = create('td');

	getByID('data').appendChild(tdDate);

	// ------------------- test ----------------
	tdDate.innerHTML = date;

}
