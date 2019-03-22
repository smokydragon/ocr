OC.L10N.register(
    "ocr",
    {
    "Saved." : "Gespeichert.",
    "Saving languages failed:" : "Fehler beim Speichern der Sprachen:",
    "The languages are not specified in the correct format." : "Die Sprachen wurden im falschen Format angegeben.",
    "Saving Redis settings failed:" : "Fehler beim Speichern der Redis-Einstellungen:",
    "The Redis settings are not specified in the right format." : "Die Redis-Einstellungen sind nicht im korrekten Format spezifiziert. ",
    "OCR" : "Texterkennung",
    "OCR processing failed:" : "Texterkennung fehlgeschlagen:",
    "No file selected." : "Keine Datei ausgewählt",
    "MIME type not supported." : "MIME-Typ nicht unterstützt.",
    "_OCR processing for %n file failed. For details please go to your personal settings._::_OCR processing for %n files failed. For details please go to your personal settings._" : ["Texterkennung für %n Datei fehlgeschlagen. Für weitere Informationen sieh in deinen Persönlichen Einstellungen nach.","Texterkennung für %n Dateien fehlgeschlagen. Für weitere Informationen siehe in Deinen Persönlichen Einstellungen nach."],
    "OCR status could not be retrieved:" : "Texterkennungs-Status kann nicht abgerufen werden.",
    "No languages available for OCR processing. Please make sure to configure the languages in the administration section." : "Keine Sprachen für die Texterkennung verfügbar. Bitte stelle sicher, dass die Sprachen im Administrationsbereich richtig eingestellt sind.",
    "Available languages could not be retrieved:" : "Verfügbare Sprachen konnten nicht abgerufen werden:",
    "Process" : "Verarbeiten",
    "Replace" : "Überschreiben",
    "_OCR started: %n new file in queue._::_OCR started: %n new files in queue._" : ["Texterkennung gestartet: %n neue Datei in der Warteschlange.","Texterkennung gestartet: %n neue Dateien in der Warteschlange."],
    "_OCR: %n currently pending file in queue._::_OCR: %n currently pending files in queue._" : ["Texterkennung: %n Datei in der Warteschlange.","Texterkennung: %n Dateien in der Warteschlange."],
    "No matches found." : "Keine Übereinstimmungen gefunden.",
    "Select language" : "Sprache wählen",
    "OCR jobs could not be retrieved:" : "Texterkennungs-Aufgaben konnten nicht abgerufen werden:",
    "The job for the following file object has been successfully deleted:" : "Aufgabe für folgendes Datei-Objekt wurde gelöscht:",
    "Error during deletion:" : "Fehler beim Löschen:",
    "Delete" : "Löschen",
    "No pending or failed OCR items found." : "Keine anstehenden oder fehlgeschlagenen Elemente zur Texterkennung gefunden.",
    "Refresh" : "Aktualisieren",
    "Delete from queue" : "Aus der Warteschlange löschen",
    "File" : "Datei",
    "Status" : "Status",
    "Log" : "Protokoll",
    "Replace by result" : "Mit Ergebnis ersetzen",
    "Saved" : "Gespeichert",
    "Please setup Redis in the administration settings first." : "Bitte erst Redis in den Administrator-Einstellungen einrichten.",
    "The given settings key is empty." : "Der eingegebenen Einstellungs-Schlüssel ist leer.",
    "The Redis host is not specified in the correct format." : "Der Redis-Host wurde im falschen Format angegeben.",
    "The Redis port number is not specified in the correct format." : "Die Redis-Portnummer wurde im falschen Format angegeben.",
    "The Redis DB is not specified in the correct format." : "Die Redis-Datenbank wurde im falschen Format angegeben.",
    "Wrong parameter." : "Falscher Parameter.",
    "Wrong MIME type." : "Falscher Medien-Typ",
    "Cannot replace shared files." : "Geteilte Dateien können nicht überschrieben werden.",
    "Empty parameters passed." : "Keine Parameter übergeben.",
    "Cannot delete because of wrong owner." : "Kann wegen falschem Besitzer nicht löschen",
    "Cannot delete because of wrong ID." : "Kann wegen falscher ID nicht löschen.",
    "Reading the finished jobs from Redis went wrong." : "Lesen der beendeten Aufgaben von Redis fehlgeschlagen.",
    "Temp file does not exist." : "Temporäre Datei existiert nicht.",
    "OCR could not put processed file to the right target folder. If you selected the replace option, you can restore the file by using the trash bin." : "OCR kann die verarbeitete Datei nicht im richtigen Zielordner speichern. Wenn Du die Überschreiben-Option gewählt hast, kannst Du die Datei über den Papierkorb wiederherstellen.",
    "Could not add files to the Redis OCR processing queue." : "Konnte keine Dateien der Redis-Texterkennungs-Aufgabenliste hinzufügen.",
    "Temp file cannot be created." : "Temporäre-Datei kann nicht erstellt werden.",
    "Cannot delete temporary file during creation of temp file for Tesseract." : "Kann temporäre Datei während der Erstellung der temporären Datei für Tesseract nicht löschen.",
    "Cannot create temporary file for Tesseract." : "Kann temporäre Datei für Tesseract nicht erstellen. ",
    "Cannot set permissions for temporary Tesseract file." : "Kann Berechtigungen der temporären Datei für Tesseract nicht setzen. ",
    "Message queueing capabilities are missing on the server (package php-redis)." : "Dem Server (package php-redis) fehlen die Fähigkeiten für Nachrichten-Warteschlangen.",
    "Cannot connect to Redis." : "Kann nicht zu Redis verbinden.",
    "Redis authentication error." : "Redis-Authentifizierungsfehler.",
    "Cannot connect to the right Redis database." : "Kann nicht zur richtigen Redis-Datenbank verbinden.",
    "Optical character recognition" : "Texterkennung",
    "Text recognition for your images and pdf files" : "Texterkennung für Deine Bilder und PDF-Dateien",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-ocr and OCRmyPDF brings OCR capability to your Nextcloud.\nThe app uses a docker container with tesseract-ocr, OCRmyPDF and communicates over redis in order to process images (png, jpeg, tiff) and PDF asynchronously and save the output file to the source folder in nextcloud. That for example enables you to search in it. (Hint: currently not all PDF-types are supported, for more information see [here](https://github.com/jbarlow83/OCRmyPDF))\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n - **[Nextcloud 12 or 13](https://nextcloud.com/)**. For older versions take an older major version of this app.\n - **Linux** server as environment. (tested with Debian 8, Raspbian and Ubuntu 14.04 (Trusty))\n - **Docker** is used for processing files. tesseract-ocr and OCRmyPDF reside in a docker container.\n - **php-redis** is used for the communication and has to be a part of your php.\n\n## Limitations\nCurrently the app is not working with any activated encryption, nor is it working with files shared via external storage or federated sharing. This has to be considered. If one wants to process such a file, it must be copied to the local environment.\n\nFor further information see the [homepage](https://github.com/janis91/ocr/wiki/Usage) or the appropriate documentation in the wiki.\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n**Please consider: The app will not work as long as the Docker container isn't running. (more information in the [wiki](https://github.com/janis91/ocr/wiki))**\n\n## Administration and Usage\nPlease read the related topics in the [wiki](https://github.com/janis91/ocr/wiki).\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied." : "# Beschreibung\n\nNextcloud-OCR (Optical Character Recognition) verarbeitet Bilder und PDF mit Tesseract-OCR/OCRmyPDF und bringt OCR-Fähigkeiten in Deine Nextcloud.\nDie App nutzt einen Docker-Container mit Tesseract-OCR, OCRmyPDF und kommuniziert via redis um Bilder (png, jpeg, tiff) und PDF asynchron zu verarbeiten. Das Ergebnis wird im Quellordner in Nextcloud gespeichert. Dadurch entsteht die Möglichkeit darin zu suchen. (Hinweis: Aktuell werden nicht alle PDF-Typen unterstützt. Weitere Informationen dazu finden sich unter [here](https://github.com/jbarlow83/OCRmyPDF))\n\n## Voraussetzungen und Abhängigkeiten\nDie OCR-App hat ein paar Voraussetzungen:\n- **[Nextcloud 12 oder 13](https://nextcloud.com/)**. Für ältere Nextcloud-Versionen muss eine ältere App-Version verwendet werden.\n- **Linux**-Server als Umgebung. (Getestet mit Debian 8, Raspbian und Ubuntu 14.04 (Trusty))\n- **Docker** wird für die Verarbeitung verwendet. Tesseract-OCR und OCRmyPDF sind in einem Docker-Container.\n- **php-redis** wird für die Kommunikation verwendet und muss Teil der PHP-Installation sein.\n\n## Limitierungen\nAktuell funktioniert die App nicht bei aktivierter Verschlüsselung, ebenso nicht mit extern geteilten oder Federated-Dateien. Soll eine Datei auf diesen Freigaben bearbeitet werden, so muss sie vorab lokal kopiert werden.\n\nWeitere Informationen finden sich auf der [Internetseite](https://github.com/janis91/ocr/wiki/Usage) oder passende Dokumentation im Wiki.\n\n## Installation\nInstalliere die App aus dem [Nextcloud AppStore](http://apps.nextcloud.com) oder laden ein Release-Package von GitHub (**NOT** die Quellen) und kopiere den Inhalt nach **nextcloud/apps/ocr/**.\n\n**Bitte beachten: Die App funktioniert nicht, wenn der Docker-Container nicht läuft. (Weitere Informationen finden sich im [Wiki](https://github.com/janis91/ocr/wiki))**\n\n## Administration und Verwendung\nBitte lese dazu im [Wiki](https://github.com/janis91/ocr/wiki).\n\n## Haftungsausschluss\nDie Software wird OHNE GEWÄHRLEISTUNGEN ODER BEDINGUNGEN JEGLICHER ART verteilt.",
    "Installed languages" : "Installierte Sprachen",
    "Here goes a semicolon separated list of languages that are supported by the Docker worker instance (more details in the wiki on GitHub)." : "Dies ist eine durch Semikolon getrennte Liste von Sprachen. Diese Sprachen werden von der Docker-Worker-Instanz unterstützt (mehr Informationen hierzu im Wiki bei GitHub).",
    "Apply" : "Anwenden",
    "Redis host" : "Redis-Host",
    "The host of the Redis instance for communication with the OCR worker." : "Der Host der Redis-Instanz für die Kommunikation mit dem Redis-Worker.",
    "Redis port" : "Redis-Port",
    "The corresponding port (normally 6379)." : "Der zugehörige Port (normalerweise 6379).",
    "Redis database" : "Redis Datenbank",
    "The Redis database (normally 0)." : "Die Redis Datenbank (normalerweise 0)",
    "Redis password" : "Redis-Passwort",
    "The password to authenticate (normally OCR)." : "Das Passwort zum Authentifizieren (normalerweise OCR)"
},
"nplurals=2; plural=(n != 1);");
