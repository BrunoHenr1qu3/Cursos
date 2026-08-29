// ======================================
// MENU MOBILE
// ======================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


// Fecha o menu ao clicar em algum link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


// ======================================
// DARK MODE
// ======================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkMode =
        document.body.classList.contains("dark-mode");

    if (darkMode) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "academyTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "academyTheme",
            "light"
        );

    }

});


// Recupera o tema salvo

const savedTheme =
    localStorage.getItem("academyTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}


// ======================================
// ANO DO FOOTER
// ======================================

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


// ======================================
// MODAL DOS CURSOS
// ======================================

const courseButtons =
    document.querySelectorAll(".course-button");

const courseModal =
    document.getElementById("courseModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");


courseButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const courseName =
            button.dataset.course;

        modalTitle.textContent =
            courseName;

        courseModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Fecha o modal

function closeModal() {

    courseModal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener(
    "click",
    closeModal
);


// Fecha clicando fora do modal

courseModal.addEventListener(
    "click",
    (event) => {

        if (event.target === courseModal) {
            closeModal();
        }

    }
);


// Fecha usando ESC

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            courseModal.classList.contains("active")
        ) {
            closeModal();
        }

    }
);


// ======================================
// NEWSLETTER
// ======================================

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const email =
            newsletterEmail.value.trim();

        if (!email) {

            newsletterMessage.textContent =
                "Digite um e-mail válido.";

            newsletterMessage.style.color =
                "#d92d20";

            return;

        }

        newsletterMessage.textContent =
            "Inscrição realizada com sucesso! 🎉";

        newsletterMessage.style.color =
            "#039855";

        newsletterForm.reset();

    }
);


// ======================================
// CARREGAR MAIS CURSOS
// ======================================

const loadMoreButton =
    document.getElementById("loadMore");

loadMoreButton.addEventListener(
    "click",
    () => {

        loadMoreButton.textContent =
            "Todos os cursos carregados ✓";

        loadMoreButton.disabled = true;

        loadMoreButton.style.opacity = "0.7";

    }
);


// ======================================
// ANIMAÇÕES AO ROLAR
// ======================================

const animatedElements =
    document.querySelectorAll(
        ".category-card, .course-card, .benefit, .instructor-card, .testimonial-card"
    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach((element) => {

    observer.observe(element);

});
