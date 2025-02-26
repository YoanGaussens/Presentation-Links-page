document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const phoneNumber = document.getElementById("phone-number").textContent;

    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        contactLink.setAttribute("href", `tel:${phoneNumber}`); // Par défaut, appel
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            const choice = confirm("Voulez-vous appeler ou envoyer un message ?");
            if (choice) {
                window.location.href = `tel:${phoneNumber}`;
            } else {
                const smsChoice = confirm("Envoyer un SMS ou ouvrir WhatsApp ?");
                if (smsChoice) {
                    window.location.href = `sms:${phoneNumber}`;
                } else {
                    window.location.href = `https://wa.me/${phoneNumber.replace(/\s/g, '')}`;
                }
            }
        });
    } else {
        contactLink.removeAttribute("href"); // Pas de lien sur PC
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert(`Numéro : ${phoneNumber}`);
        });
    }
});
