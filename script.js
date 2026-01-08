// ==========================================
//    Bonnes réponses du QCM (Niveau Expert)
// ==========================================
const bonnesReponses = {
    1: "B", 2: ["A", "B"], 3: "C", 4: ["B", "D"], 5: "B",
    6: "C", 7: ["A", "C", "D"], 8: "B", 9: "B", 10: "C",
    11: "B", 12: ["A", "B", "D"], 13: "C", 14: "A", 15: ["A", "B", "D"],
    16: "C", 17: "B", 18: ["B", "C"], 19: "A", 20: "C",
    21: ["A", "B", "C"], 22: "B", 23: "B", 24: ["B", "D"], 25: "A",
    26: "C", 27: ["A", "B", "D"], 28: "B", 29: "B", 30: ["A", "C", "D"]
};

// ===============================
//    Fonction de validation
// ===============================
function corrigerQCM() {
    const questions = document.querySelectorAll(".qcm-question");
    let scoreTotal = 0;

    questions.forEach(q => {
        const id = q.dataset.question;
        const type = q.dataset.type;
        const attendu = bonnesReponses[id];
        const block = document.getElementById(`question-${id}`);
        const navBtn = document.querySelector(`.nav-question[data-target="${id}"]`);
        
        const inputsChecked = Array.from(q.querySelectorAll(`input[name="q${id}"]:checked`));
        const reponsesUser = inputsChecked.map(input => input.value);

        let pointsQuestion = 0;

        if (reponsesUser.length === 0) {
            if (block) block.style.border = "3px solid orange";
            navBtn?.classList.add("missing");
        } else {
            if (type === "single") {
                // Choix unique : 1 pt ou 0 pt
                if (reponsesUser[0] === attendu) {
                    pointsQuestion = 1;
                }
            } else {
                // Choix multiple : Points partiels
                const nbBonnesTotal = attendu.length;
                let bonnesTrouvees = 0;
                let erreurs = 0;

                reponsesUser.forEach(val => {
                    if (attendu.includes(val)) {
                        bonnesTrouvees++;
                    } else {
                        erreurs++;
                    }
                });

                // Règle : Si aucune erreur, on donne le prorata. Si une erreur, 0 point.
                if (erreurs === 0) {
                    pointsQuestion = bonnesTrouvees / nbBonnesTotal;
                } else {
                    pointsQuestion = 0;
                }
            }

            // --- GESTION VISUELLE ---
            if (pointsQuestion === 1) {
                // Tout bon
                if (block) block.style.border = "3px solid #00ff80";
                navBtn?.classList.add("good");
            } else if (pointsQuestion > 0) {
                // Partiel (Orange)
                if (block) block.style.border = "3px solid #ffb300";
                navBtn?.classList.add("missing");
            } else {
                // Faux (Rouge)
                if (block) block.style.border = "3px solid #ff5252";
                navBtn?.classList.add("bad");
            }
        }

        scoreTotal += pointsQuestion;

        // Affichage du panneau de correction
        const panel = q.querySelector(".correction-panel");
        if (panel) {
            panel.style.display = "block";
            panel.style.opacity = "1";
            panel.style.transform = "translateY(0)";
            panel.style.pointerEvents = "auto";
        }
    });

    // Mise à jour du score avec un seul chiffre après la virgule
    const scoreBox = document.getElementById("score-result");
    if (scoreBox) {
        scoreBox.textContent = `Score : ${scoreTotal.toFixed(1)} / 30`;
        scoreBox.classList.remove("score-bump");
        void scoreBox.offsetWidth; // Reset animation
        scoreBox.classList.add("score-bump");
    }

    // Désactivation et scroll
    document.querySelectorAll("input").forEach(i => i.disabled = true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
//    Reset (Version Nettoyage)
// ===============================
function resetQCM() {
    document.querySelectorAll('input').forEach(input => {
        input.checked = false;
        input.disabled = false;
    });

    document.querySelectorAll(".correction-panel").forEach(panel => {
        panel.style.display = "none";
        panel.style.opacity = "0";
    });

    document.querySelectorAll(".qcm-question").forEach(q => {
        q.style.border = "2px solid transparent";
    });

    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.classList.remove("good", "bad", "missing");
    });

    const scoreBox = document.getElementById("score-result");
    if (scoreBox) scoreBox.textContent = "Score : -- / 30";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
//    Navigation et Initialisation
// ===============================
function initSidebarNavigation() {
    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = `question-${btn.dataset.target}`;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            if (window.innerWidth <= 900) {
                document.body.classList.remove("sidebar-open");
            }
        });
    });
}

function initBurger() {
    const burger = document.getElementById("sidebar-toggle");
    if (burger) {
        burger.addEventListener("click", () => {
            document.body.classList.toggle("sidebar-open");
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initSidebarNavigation();
    initBurger();
    const validateBtn = document.getElementById("validate-btn");
    const resetBtn = document.getElementById("reset-btn");
    if (validateBtn) validateBtn.addEventListener("click", corrigerQCM);
    if (resetBtn) resetBtn.addEventListener("click", resetQCM);
});