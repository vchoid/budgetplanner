CREATE TABLE transferRichtung(
	transferID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 0, INCREMENT BY 1),
	bezeichnung VARCHAR(50),
	CONSTRAINT pkey_tranfer_100 PRIMARY KEY (transferID)
) ; 
INSERT INTO transferRichtung(
	bezeichnung
	)
VALUES 
	('Einnahme'),
	('Ausgabe'),
	('Übertrag');
CREATE TABLE kategorie(
	kategorieID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 0, INCREMENT BY 1),
	bezeichnung VARCHAR(50),
	CONSTRAINT pkey_kategorie_100 PRIMARY KEY (kategorieID),
) ; 

INSERT INTO kategorie(
	bezeichnung
)
VALUES 
	('Bargeld'),
	('Elektronik und Medien'), 
	('Gebühren und Zinsen'),
	('Geschenke und Kinder'),
	('Gesundheit und Kosmetik'),
	('Handy und Internet'),
	('Haushalt'),
	('Kleidung'),
	('Kontoübertrag'),
	('Kredit und Leasing'),
	('Kreditkarte'),
	('Lebensmittel'),
	('Miete und Hypothek'),
	('Reisen und Urlaub'),
	('Restaurant und Freizeit'),
	('Rückerstattung'),
	('Sparen'),
	('Sport und Hobby'),
	('Verkehr'),
	('Versicherung'),
	('Wohnnebenkosten'),
	('Sonstige Ausgaben'),
	('Sonstiges Einnahmen');
CREATE TABLE konto(
	kontoID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1000, INCREMENT BY 1),
	bezeichnung VARCHAR(50),
	CONSTRAINT pkey_konto_100 PRIMARY KEY (kontoID)
); 
INSERT INTO konto(
	bezeichnung
	)
VALUES 
	('Girokonto'),
	('Sparkonto'),
	('Kreditkartenkonto');
CREATE TABLE status(
	statusID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 0, INCREMENT BY 1),
	bezeichnung VARCHAR(25),
	CONSTRAINT pkey_status_100 PRIMARY KEY (statusID)
);
INSERT INTO status(
	bezeichnung
	)
VALUES 
	('vorgemerkt'),
	('gebucht');
CREATE TABLE turnus(
	turnusID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 0, INCREMENT BY 1),
	bezeichnung VARCHAR(50),
	CONSTRAINT pkey_turnus_100 PRIMARY KEY (turnusID)
);	
INSERT INTO turnus(
	bezeichnung
	)
VALUES 
	('einmalig'),
	('monatlich'),
	('quartalsweise'),
	('halbjährlich'),
	('jährlich');
/*	
CREATE TABLE buchung(
	buchungsID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
	verwendungszweck VARCHAR(300),
	betrag decimal(15,2) default 0.00,
	buchungsdatum date NOT NULL default '0000-00-00',
	erfassungsdatum date NOT NULL default '0000-00-00',
	kontoID INTEGER NOT NULL default 1,
	kategorieID INTEGER NOT NULL,
	statusID INTEGER NOT NULL default 1,
	turnusID INTEGER NOT NULL,
	CONSTRAINT pkey_buchung_100 PRIMARY KEY (buchungsID),
	CONSTRAINT fKey_konto_110 FOREIGN KEY (kontoID) REFERENCES konto(kontoID),
	CONSTRAINT fKey_kategorie_110 FOREIGN KEY (kategorieID) REFERENCES kategorie(kategorieID),
	CONSTRAINT fKey_status_110 FOREIGN KEY (statusID) REFERENCES status(statusID),
	CONSTRAINT fKey_turnus_110 FOREIGN KEY (turnusID) REFERENCES turnus(turnusID)
);
*/
CREATE TABLE buchung(
	buchungsID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1000, INCREMENT BY 1),
	transferID INTEGER NOT NULL,
	verwendungszweck VARCHAR(300),
	betrag decimal(15,2) default 0.00,
	buchungsdatum date NOT NULL default '0000-00-00',
	erfassungsdatum timestamp default current_timestamp,
	kontoID INTEGER NOT NULL default 1,
	kategorieID INTEGER NOT NULL,
	statusID INTEGER NOT NULL default 1,
	turnusID INTEGER NOT NULL,
	CONSTRAINT pkey_buchung_100 PRIMARY KEY (buchungsID),
	CONSTRAINT fKey_transfer_110 FOREIGN KEY (transferID) REFERENCES transferRichtung(transferID),
	CONSTRAINT fKey_konto_110 FOREIGN KEY (kontoID) REFERENCES konto(kontoID),
	CONSTRAINT fKey_kategorie_110 FOREIGN KEY (kategorieID) REFERENCES kategorie(kategorieID),
	CONSTRAINT fKey_status_110 FOREIGN KEY (statusID) REFERENCES status(statusID),
	CONSTRAINT fKey_turnus_110 FOREIGN KEY (turnusID) REFERENCES turnus(turnusID)
);

/*
	Test Eintrag
*/
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	1,
	'Strom Yellow',
	34.99,
	'2017-01-12',
    1000,
	21,
	1,
	1
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	1,
	'Miete BHG',
	645.45,
	'2017-09-15',
    1000,
	13,
	1,
	1
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	1,
	'GEZ',
	52.65,
	'2017-08-15',
    1000,
	21,
	1,
	2
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	1,
	'bahn.de',
	44.80,
	'2017-09-01',
    1000,
	14,
	1,
	0
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	0,
	'Taschengeld',
	50,
	'2017-09-12',
    1001,
	1,
	1,
	0
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	2,
	'Urlaub',
	6000,
	'2017-10-15',
    1002,
	14,
	0,
	0
);
INSERT INTO buchung(
	transferID,
    verwendungszweck,
	betrag,
	buchungsdatum,
	kontoID,
	kategorieID,
	statusID,
	turnusID
)
VALUES (
	2,
	'Urlaub umbuchung',
	6000,
	'2017-10-15',
    1000,
	14,
	0,
	0
);



DROP TABLE buchung;

DELETE FROM BUCHUNG
WHERE buchungsID=5;


	