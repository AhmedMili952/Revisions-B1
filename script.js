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
            let estCorrect = false;
            if (type === "single") {
                estCorrect = reponsesUser[0] === attendu;
            } else {
                // Comparaison robuste pour les choix multiples
                const trieUser = [...reponsesUser].sort().join(",");
                const trieAttendu = Array.isArray(attendu) ? [...attendu].sort().join(",") : attendu;
                estCorrect = trieUser === trieAttendu;
            }

            if (estCorrect) {
                score++;
                if (block) block.style.border = "3px solid #00ff80";
                navBtn?.classList.add("good");
            } else {
                if (block) block.style.border = "3px solid #ff5252";
                navBtn?.classList.add("bad");
            }
        }

        const panel = q.querySelector(".correction-panel");
        if (panel) {
            panel.style.display = "block";
            panel.style.opacity = "1";
            panel.style.transform = "translateY(0)";
            panel.style.pointerEvents = "auto";
        }
    });

    const scoreBox = document.getElementById("score-result");
    if (scoreBox) scoreBox.textContent = `Score : ${score} / 30`;
    
    document.querySelectorAll("input").forEach(i => i.disabled = true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
//   Reset (Version Ultra-Nettoyage)
// ===============================
function resetQCM() {
    // 1. Décocher TOUS les boutons et cases
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
        input.disabled = false;
    });

    // 2. Masquer les corrections et remettre les bordures à zéro
    document.querySelectorAll(".correction-panel").forEach(panel => {
        panel.style.display = "none";
        panel.style.opacity = "0";
    });

    document.querySelectorAll(".qcm-question").forEach(q => {
        q.style.border = "2px solid transparent";
    });

    // 3. Reset Sidebar
    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.classList.remove("good", "bad", "missing");
    });

    // 4. Reset Score
    const scoreBox = document.getElementById("score-result");
    if (scoreBox) scoreBox.textContent = "Score : -- / 30";

    // 5. Scroll en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
//   Navigation et Menu
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