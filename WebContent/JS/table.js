var create = function(tag) {
	return document.createElement(tag);
};
var getByID = function(id) {
	return document.getElementById(id);
}

var headerArray = [];
/**
 * Erstellt eine Var mit der Anzahl der Zeichen einer Zeile. Erstellt eine
 * Variable zum zwischenspeichern der einzelne Wörter. Erstellt eine
 * Zählervariable zum speichern der Wörter in ein Array.
 * Die For-Schleife läuft die Länge Zeile ab (lenght) und ließt alle Zeichen.
 * Überprüft bei jedem Zeichen ob es sich nicht um ein ';' handelt.
 * Bei true -> Speichert das Zeichen der Stelle 'i' in die Variable 'data' 
 * und hängt bei true weitere Zeichen hinten an.
 * Speichert 'data'-Variable dann in ein Array an der Position 'j'
 * Bei false -> leert die 'data'-Variable. Erhöht die Stelle im Array um 1. 
 * @param oneRow
 * @returns {Array}
 */
function csvContentToArray(oneRow) {
	var lenght = oneRow.length;
	var data = '';
	var j = 0;
	for (var i = 0; i < lenght; i++) {
		if (oneRow[i] !== ';') {
			data += oneRow[i];
			headerArray[j] = data;
		} else {
			data = '';
			j++;
			continue;
		}
	}
	return headerArray;
}

var dataArray = [];
function csvContentToArray2(oneRow) {
	var lenght = oneRow.length;
	var data = '';
	var j = 0;
	for (var i = 0; i < lenght; i++) {
		if (oneRow[i] !== '\r') {
			data += oneRow[i];
			dataArray[j] = data;
		} else {
			data = '';
			j++;
			continue;
		}
	}
	return dataArray;
}

var headLenght;
/**
 * Erstellt aus einem Array, eine Kopfzeilen für eine Tabelle.
 * 
 * @param headArr
 */
function createTableHeader(headArr) {
	var tRow = create('tr');
	getByID('head').appendChild(tRow);
	for (var i = 0; i < headArr.length; i++) {
		var th = create('th');
		tRow.appendChild(th);
		th.innerHTML = headArr[i];
	}
}
/**
 * Erstellt in jeder Spalte einer Reihe (Länge anhand der Länge der Kopfzeile -> Array ein Datensatz.
 */
function createTableData(dataArr) {
	var tRow = create('tr');
	getByID('body').appendChild(tRow);
	for (var int = 0; int < 3; int++) {
		var tdData = create('td');
		tRow.appendChild(tdData);
		tdData.innerHTML = dataArr;
	}
}

/**
 * Fordert eine Datei an und ließt die erste Zeile einer CSV-Datei und speichert
 * diese als Kopfzeile einer Tabelle.
 */
function loadCSVHeader() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var head = csvContentToArray(this.responseText);
			createTableHeader(head);
			loadCSVData();
		}
	};
	xhttp.open("GET", "../Haushaltbuch/header.csv", true);
	xhttp.send();
}
function splitDataArrayToOneTableRow(dataArray){
	//TODO -> einzelne Datensaätze erkennen und in eine neues Array speichern
}
/**
 * Fordert eine Datei an und ließt die erste Zeile einer CSV-Datei und speichert
 * diese als Kopfzeile einer Tabelle.
 */
function loadCSVData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var rawDataArray = csvContentToArray2(this.responseText);
			createTableData(rawDataArray);
			
		}
	};
	xhttp.open("GET", "../Haushaltbuch/testdata.csv", true);
	xhttp.send();
}

	
