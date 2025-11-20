/*****************************************************
 *  QCM UNIVERSAL ENGINE — Compatible 10 à 200 questions
 *****************************************************/

/**
 * Récupère automatiquement les bonnes réponses grâce à l’HTML :
 * Chaque question doit avoir : <div class="qcm-question" data-answer="B">
 */
function getBonnesReponses() {
    const result = {};
    const blocks = document.querySelectorAll(".qcm-question");

    blocks.forEach((q, index) => {
        const num = q.dataset.question;
        const rep = q.dataset.answer || null;
        if (num && rep) result[num] = rep;
    });

    return result;
}

let bonnesReponses = {}; // rempli au chargement


/*****************************************************
 *                 VALIDATION DU QCM
 *****************************************************/
function corrigerQCM() {

    const questions = document.querySelectorAll(".qcm-question");
    const total = questions.length;
    let score = 0;

    // On réinitialise visuel
    questions.forEach(q => q.style.border = "2px solid transparent");
    document.querySelectorAll(".nav-question")
        .forEach(btn => btn.classList.remove("good", "bad", "missing"));

    // Boucle dynamique
    questions.forEach(q => {
        const num = q.dataset.question;
        const bonneRep = bonnesReponses[num];
        const selected = q.querySelector(`input[name="q${num}"]:checked`);
        const navBtn = document.querySelector(`.nav-question[data-target="${num}"]`);

        if (!selected) {
            q.style.border = "3px solid orange";
            navBtn?.classList.add("missing");
            return;
        }

        if (selected.value === bonneRep) {
            score++;
            q.style.border = "3px solid lime";
            navBtn?.classList.add("good");
        } else {
            q.style.border = "3px solid #ff4444";
            navBtn?.classList.add("bad");
        }
    });

    // Score animée
    const scoreBox = document.getElementById("score-result");
    scoreBox.textContent = `Score : ${score} / ${total}`;
    scoreBox.classList.remove("score-bump");
    void scoreBox.offsetWidth;
    scoreBox.classList.add("score-bump");

    // Afficher toutes les explications
    document.querySelectorAll(".correction-panel").forEach(p => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
        p.style.pointerEvents = "auto";
    });

    // Désactiver les radios
    document.querySelectorAll("input[type='radio']")
        .forEach(r => r.disabled = true);
}


/*****************************************************
 *                 RESET DU QCM
 *****************************************************/
function resetQCM() {

    const questions = document.querySelectorAll(".qcm-question");

    // Réinitialisation visuelle
    questions.forEach(q => {
        q.style.border = "2px solid transparent";
        q.querySelectorAll("input[type='radio']").forEach(r => {
            r.checked = false;
            r.disabled = false;
        });
    });

    // Cacher les explications
    document.querySelectorAll(".correction-panel").forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateY(-5px)";
        p.style.pointerEvents = "none";
    });

    // Score reset
    const total = questions.length;
    const scoreBox = document.getElementById("score-result");
    scoreBox.textContent = `Score : — / ${total}`;
    scoreBox.classList.remove("score-bump");

    // Reset navigation
    document.querySelectorAll(".nav-question")
        .forEach(btn => btn.classList.remove("good", "bad", "missing"));
}


/*****************************************************
 *       Navigation sidebar (Q1 → Qxx)
 *****************************************************/
function initSidebarNavigation() {
    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const qNum = btn.dataset.target;
            const target = document.getElementById(`question-${qNum}`);

            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            if (window.innerWidth <= 900) {
                document.body.classList.remove("sidebar-open");
            }
        });
    });
}


/*****************************************************
 *                 BURGER MENU
 *****************************************************/
function initBurger() {
    const burger = document.getElementById("sidebar-toggle");
    if (!burger) return;

    burger.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-open");
    });
}


/*****************************************************
 *                INIT GLOBAL
 *****************************************************/
document.addEventListener("DOMContentLoaded", () => {

    // 1) Auto-détection des bonnes réponses depuis l'HTML
    bonnesReponses = getBonnesReponses();

    // 2) Initialisation interface
    initSidebarNavigation();
    initBurger();

    // 3) Boutons
    document.getElementById("validate-btn")
        .addEventListener("click", corrigerQCM);

    document.getElementById("reset-btn")
        .addEventListener("click", resetQCM);
});
