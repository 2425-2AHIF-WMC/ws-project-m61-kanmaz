// Funktion, für die Navbar
window.onscroll = function() {
    let navbar = document.querySelector('.navbar'); // Holt das Navbar-Element
    if (window.scrollY > 50) { // Wenn die Seite mehr als 50px nach unten gescrollt wurde
        navbar.classList.add('scrolled'); // Fügt der Navbar die Klasse 'scrolled' hinzu
    } else {
        navbar.classList.remove('scrolled'); // Entfernt die Klasse 'scrolled' von der Navbar
    }
};


// Funktion, die die Telefonnummer in die Zwischenablage kopiert
function copyPhoneNumber() {
    var phoneNumber = document.getElementById("phone-number").textContent; // Holt die Telefonnummer mit der ID 'phone-number'
    navigator.clipboard.writeText(phoneNumber).then(function() { // Kopiert den Text in die Zwischenablage
        alert("Telefonnummer wurde kopiert!"); // Zeigt eine Erfolgsmeldung an
    });
}

// Funktion, die die E-Mail-Adresse in die Zwischenablage kopiert
function copyMail() {
    var mail = document.getElementById("mail").textContent; // Holt die E-Mail mit der ID 'mail'
    navigator.clipboard.writeText(mail).then(function() { // Kopiert den Text in die Zwischenablage
        alert("E-Mail wurde kopiert!"); // Zeigt eine Erfolgsmeldung an
    });
}

// Funktion, die die Adresse in die Zwischenablage kopiert
function copyAddress() {
    var address = document.getElementById("address").textContent; // Holt die Adresse mit der ID 'address'
    navigator.clipboard.writeText(address).then(function() { // Kopiert den Text in die Zwischenablage
        alert("Adresse wurde kopiert!"); // Zeigt eine Erfolgsmeldung an
    });
}



// Funktion zum Öffnen des Modals
function openModal(img) {
    const modal = document.getElementById("modal"); // Sucht das Modal-Element
    const modalImg = document.getElementById("modal-img"); // Sucht das Bild-Element im Modal

    modal.style.display = "flex"; // Zeigt das Modal an und richtet es mit Flexbox aus
    modalImg.src = img.src; // Setzt die Quelle des Bildes im Modal auf die Quelle des geklickten Bildes
}

// Funktion zum Schließen des Modals
function closeModal() {
    const modal = document.getElementById("modal"); // Sucht das Modal-Element
    modal.style.display = "none"; // Versteckt das Modal wieder
}

// Füge den Event Listener zu jeder Region hinzu
// Wir suchen nach allen Elementen mit der Klasse 'region' und durchlaufen sie mit .forEach()
document.querySelectorAll('.region').forEach(region => {
    // Füge jedem Element einen Event Listener hinzu, der auf den 'click' Event wartet
    region.addEventListener('click', () => {
        // Beim Klick wird die 'flipped' Klasse zum Element hinzugefügt oder entfernt
        // Das bewirkt, dass die Karte sich dreht (flippt), je nachdem, ob die Klasse schon vorhanden ist oder nicht
        region.classList.toggle('flipped');
    });
});



