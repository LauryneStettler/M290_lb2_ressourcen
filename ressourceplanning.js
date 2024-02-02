function showOptions() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.style.display = "block";
}

function updateResources() {
    var category = document.getElementById("category").value;
    var resourcesSelect = document.getElementById("resources");

    // Entferne alle vorherigen Optionen
    resourcesSelect.innerHTML = "";

    // Füge neue Optionen basierend auf der ausgewählten Kategorie hinzu
    switch (category) {
    case "Camera":
    addOption(resourcesSelect, "Canon E0S 5D Mark IV");
    addOption(resourcesSelect, "Nikon D850");
    addOption(resourcesSelect, "Sony Alpha A7 III");
    break;
    case "Lighting":
    addOption(resourcesSelect, "Soft Box");
    addOption(resourcesSelect, "Striplights");
    addOption(resourcesSelect, "Pointlight");
    break;
    case "Audio - Accessory":
    addOption(resourcesSelect, "Microphone 1");
    addOption(resourcesSelect, "Microphone 2");
    addOption(resourcesSelect, "Microphone 3");
    break;
    default:
    // Do nothing
}
}

    function addOption(selectElement, optionText) {
    var option = document.createElement("option");
    option.text = option.value = optionText;
    selectElement.add(option);
}

    function confirmSelection() {
    // Hier kannst du die Bestätigungslogik implementieren
    console.log("Selection confirmed!");
}

function confirmSelection() {
    var category = document.getElementById("category").value;
    var resource = document.getElementById("resources").value;
    var place = document.getElementById("place").value;
    var reservation = document.getElementById("reservation").value;

    // Ausgabe in der Konsole
    console.log("Ausgewählte Kategorie: " + category);
    console.log("Ausgewählte Ressource: " + resource);
    console.log("Ausgewählte Place: " + place);
    console.log("Ausgewählte Datum: " + reservation);}
// Login Seite
function confirmLogin(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ausgabe in der Konsole
    console.log("Benutzername: " + username);
    console.log("Passwort: " + password);
}



