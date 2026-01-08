const bonnesReponses = {
    1: "B", 2: ["A", "B"], 3: "C", 4: ["B", "D"], 5: "B",
    6: "C", 7: ["A", "C", "D"], 8: "B", 9: "B", 10: "C",
    11: "B", 12: ["A", "B", "D"], 13: "C", 14: "A", 15: ["A", "B", "D"],
    16: "C", 17: "B", 18: ["B", "C"], 19: "A", 20: "C",
    21: ["A", "B", "C"], 22: "B", 23: "B", 24: ["B", "D"], 25: "A",
    26: "C", 27: ["A", "B", "C"], 28: "A", 29: "B", 30: "C"
};

// --- ALGORITHME DE FISHER-YATES ---
function algorithmeDeFisherYates() {
    document.querySelectorAll(".qcm-question").forEach(q => {
        const container = q.querySelector(".qcm-options");
        if (!container) return;

        const labels = Array.from(container.querySelectorAll("label"));
        const lettresOrdre = ["A", "B", "C", "D"];

        // 1. Melange des elements (Fisher-Yates)
        for (let i = labels.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [labels[i], labels[j]] = [labels[j], labels[i]];
        }

        // 2. Reconstruction propre du HTML
        container.innerHTML = "";
        labels.forEach((label, index) => {
            const input = label.querySelector("input");
            
            // On extrait le texte en supprimant TOUTES les anciennes lettres/points au debut
            let texteBrut = label.innerText.replace(/^([A-Z][\.\s]*)+/i, "").trim();
            
            label.innerHTML = ""; // On vide le label
            label.appendChild(input); // On remet le bouton radio/checkbox
            
            // On ajoute la lettre fixe (A, B, C ou D) selon la nouvelle position
            label.appendChild(document.createTextNode(` ${lettresOrdre[index]}. ${texteBrut}`));
            container.appendChild(label);
        });
    });
}

// --- LOGIQUE DE REINITIALISATION SANS DOUBLONS ---
function resetQCM() {
    // 1. Decocher et reactiver les boutons
    document.querySelectorAll("input").forEach(i => {
        i.checked = false;
        i.disabled = false;
    });

    // 2. Nettoyer les styles et masquer les corrections
    document.querySelectorAll(".qcm-question").forEach(q => {
        q.style.borderLeft = "none";
        const panel = q.querySelector(".correction-panel");
        if (panel) panel.style.display = "none";
    });

    // 3. Reset Sidebar et Score
    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.classList.remove("good", "bad", "missing");
    });
    const sb = document.getElementById("score-result");
    if (sb) sb.textContent = "Score : — / 30";
    
    // 4. Relancer le melange (Fisher-Yates s'occupera du nettoyage des lettres)
    algorithmeDeFisherYates(); 

    // 5. Retour fluide en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- INITIALISATION ---
document.addEventListener("DOMContentLoaded", () => {
    algorithmeDeFisherYates();
    
    const btnV = document.getElementById("validate-qcm");
    if (btnV) btnV.onclick = corrigerQCM; // Utilisez votre fonction corrigerQCM existante

    const btnR = document.getElementById("reset-qcm");
    if (btnR) btnR.onclick = resetQCM;

    document.querySelectorAll(".nav-question").forEach(btn => {
        btn.onclick = () => {
            const t = document.getElementById(`question-${btn.dataset.target}`);
            if (t) t.scrollIntoView({ behavior: "smooth", block: "center" });
        };
    });
});