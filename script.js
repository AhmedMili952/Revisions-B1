// ==========================================
//   Bonnes réponses du QCM (Niveau Expert)
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
//   Fonction de validation
// ===============================
function corrigerQCM() {
    const questions = document.querySelectorAll(".qcm-question");
    let score = 0;

    questions.forEach(q => {
        const id = q.dataset.question;
        const type = q.dataset.type;
        const attendu = bonnesReponses[id];
        const block = document.getElementById(`question-${id}`);
        const navBtn = document.querySelector(`.nav-question[data-target="${id}"]`);
        
        const inputsChecked = Array.from(q.querySelectorAll(`input[name="q${id}"]:checked`));
        const reponsesUser = inputsChecked.map(input => input.value);

        if (reponsesUser.length === 0) {
            if (block) block.style.border = "3px solid orange";
            navBtn?.classList.add("missing");
        } else {
            let estCorrect = (type === "single") 
                ? reponsesUser[0] === attendu 
                : (reponsesUser.length === attendu.length && reponsesUser.every(val => attendu.includes(val)));

            if (estCorrect) {
                score++;
                if (block) block.style.border = "3px solid #00ff80";
                navBtn?.classList.add("good");
            } else {
                if (block) block.style.border = "3px solid #ff5252";
                navBtn?.classList.add("bad");
            }
        }

        // --- CORRECTION AFFICHAGE ---
        const panel = q.querySelector(".correction-panel");
        if (panel) {
            // On force l'affichage malgré l'opacity 0 du CSS
            panel.style.opacity = "1";
            panel.style.transform = "translateY(0)";
            panel.style.pointerEvents = "auto";
            panel.style.display = "block"; 
        }
    });

    const scoreBox = document.getElementById("score-result");
    if (scoreBox) {
        scoreBox.textContent = `Score : ${score} / 30`;
        scoreBox.classList.remove("score-bump");
        void scoreBox.offsetWidth; 
        scoreBox.classList.add("score-bump");
    }

    document.querySelectorAll("input").forEach(i => i.disabled = true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
//   Reset et Navigation
// ===============================
function resetQCM() {
    window.location.reload(); // Méthode la plus propre pour tout réinitialiser
}

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