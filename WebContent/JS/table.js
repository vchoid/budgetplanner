var create = function(tag) {
	return document.createElement(tag);
};
var getByID = function(id) {
	return document.getElementById(id);
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
 * Erstellt aus einem Array, Kopfzeilen einer Tabelle.
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
 * Erstellt in jeder Spalte einer Reihe (Länge anhand der Länge der Kopfzeile -> Array) ein Datensatz.
 */
function createTableData(testData) {
	var tRow = create('tr');
	getByID('body').appendChild(tRow);
	for (var int = 0; int < titleArray.length; int++) {
		var tdData = create('td');
		tRow.appendChild(tdData);
		
		// TODO Löschen! Nur zum testen.
		tdData.innerHTML = testData;
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
			var head = createHeaderArray(this.responseText);
			createTableHeader(head);
			// TODO Löschen! Nur zum testen.
			for (var i = 0; i < 10; i++) {
				createTableData('Data ' + i);
			}
		}
	};
	xhttp.open("GET", "../Haushaltbuch/header.csv", true);
	xhttp.send();
}
