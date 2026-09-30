/* =========================================
   ANSARI NOTES HUB - JAVASCRIPT
   ========================================= */


/* =========================
   MOBILE MENU
   ========================= */

function toggleMenu() {
    const menu = document.querySelector(".nav-menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


/* =========================
   CLOSE MOBILE MENU
   ========================= */

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.querySelector(".nav-menu");

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


/* =========================
   SEARCH NOTES
   ========================= */

function searchNotes() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const searchText = input.value.toLowerCase().trim();

    const notes = document.querySelectorAll(".note-card");

    let found = false;


    notes.forEach(function(note) {

        const title = note.getAttribute("data-title") || "";

        const content = note.innerText || "";

        const searchableText =
            (title + " " + content).toLowerCase();


        if (
            searchText === "" ||
            searchableText.includes(searchText)
        ) {

            note.style.display = "";

            found = true;

        } else {

            note.style.display = "none";

        }

    });


    /* Search result message */

    let resultMessage =
        document.getElementById("searchResultMessage");


    if (!resultMessage) {

        resultMessage =
            document.createElement("p");

        resultMessage.id =
            "searchResultMessage";

        resultMessage.style.textAlign =
            "center";

        resultMessage.style.marginTop =
            "20px";

        resultMessage.style.fontWeight =
            "600";

        const notesSection =
            document.querySelector(".notes-section .container");

        if (notesSection) {

            notesSection.appendChild(
                resultMessage
            );

        }

    }


    if (searchText !== "" && !found) {

        resultMessage.textContent =
            "❌ कोई Note नहीं मिला। दूसरा नाम या Subject खोजें।";

        resultMessage.style.color =
            "#d93025";

    } else if (searchText !== "") {

        resultMessage.textContent =
            "✅ आपके Search से जुड़े Notes दिखाए गए हैं।";

        resultMessage.style.color =
            "#188038";

    } else {

        resultMessage.textContent = "";

    }

}


/* =========================
   ENTER KEY SEARCH
   ========================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchNotes();

            }

        }
    );

}


/* =========================
   BACK TO TOP BUTTON
   ========================= */

const backToTop =
    document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

backToTop.style.position = "fixed";
backToTop.style.bottom = "22px";
backToTop.style.right = "20px";
backToTop.style.width = "45px";
backToTop.style.height = "45px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#1769e0";
backToTop.style.color = "white";
backToTop.style.fontSize = "22px";
backToTop.style.fontWeight = "bold";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

document.body.appendChild(backToTop);


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 400) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    }
);


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   CURRENT YEAR
   ========================= */

const footerYear =
    document.querySelector(".footer-bottom p");


if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        "© " +
        currentYear +
        " Ansari Notes Hub. All Rights Reserved.";

}


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "Ansari Notes Hub website loaded successfully!"
);
