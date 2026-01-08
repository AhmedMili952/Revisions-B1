const bonnesReponses = {
    1: "B", 2: ["A", "B"], 3: "C", 4: ["B", "D"], 5: "B",
    6: "C", 7: ["A", "C", "D"], 8: "B", 9: "B", 10: "C",
    11: "B", 12: ["A", "B", "D"], 13: "C", 14: "A", 15: ["A", "B", "D"],
    16: "C", 17: "B", 18: ["B", "C"], 19: "A", 20: "C",
    21: ["A", "B", "C"], 22: "B", 23: "B", 24: ["B", "D"], 25: "A",
    26: "C", 27: ["A", "B", "D"], 28: "B", 29: "B", 30: ["A", "C", "D"]
};

// --- MÉLANGE ET NETTOYAGE DES LETTRES ---
function mélangerEtRéindexer() {
    document.querySelectorAll(".qcm-question").forEach(q => {
        const container = q.querySelector(".qcm-options");
        if (!container) return;

        const labels = Array.from(container.querySelectorAll("label"));
        const lettresOrdre = ["A.", "B.", "C.", "D."];

        // 1. On extrait le texte pur en supprimant TOUTES les lettres au début (A. B. C. ou D.)
        const textesVierges = labels.map(label => {
            let texteBrut = label.innerText;
            // Cette regex retire TOUTES les lettres majuscules suivies d'un point au début
            // Même s'il y en a plusieurs comme "A. C. "
            return texteBrut.replace(/^([A-Z]\.\s*)+/gi, "").trim();
        });

        // 2. On mélange les textes vierges
        for (let i = textesVierges.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [textesVierges[i], textesVierges[j]] = [textesVierges[j], textesVierges[i]];
        }

        // 3. On reconstruit les labels proprement
        labels.forEach((label, index) => {
            const input = label.querySelector("input");
            label.innerHTML = ""; // On vide tout
            label.appendChild(input); // On remet la case à cocher
            
            // On ajoute UNE SEULE lettre propre suivie du texte
            const nouveauTexte = document.createTextNode(` ${lettresOrdre[index]} ${textesVierges[index]}`);
            label.appendChild(nouveauTexte);
        });
    });
}

// --- CORRECTION (SANS SUPPRESSION) ---
function corrigerQCM() {
    let scoreTotal = 0;
    document.querySelectorAll(".qcm-question").forEach(q => {
        const id = q.dataset.question;
        const type = q.dataset.type;
        const attendu = bonnesReponses[id];
        const cochés = Array.from(q.querySelectorAll(`input:checked`)).map(i => i.value);

        let pts = 0;
        if (cochés.length > 0) {
            if (type === "single") {
                if (cochés[0] === attendu) pts = 1;
            } else {
                let trouvées = 0, erreurs = 0;
                cochés.forEach(v => attendu.includes(v) ? trouvées++ : erreurs++);
                pts = (erreurs === 0) ? (trouvées / attendu.length) : 0;
            }
        }

        // Visuel
        q.style.border = pts === 1 ? "3px solid #00ff80" : (pts > 0 ? "3px solid #ffb300" : "3px solid #ff5252");
        if (cochés.length === 0) q.style.border = "3px solid orange";

        // Affichage explication
        const panel = q.querySelector(".correction-panel");
        if (panel) {
            panel.style.display = "block";
            panel.style.opacity = "1";
        }

        q.querySelectorAll("input").forEach(i => i.disabled = true);
        scoreTotal += pts;
    });

    const sb = document.getElementById("score-result");
    if (sb) sb.textContent = `Score : ${scoreTotal.toFixed(1)} / 30`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- RESET ---
function resetQCM() {
    document.querySelectorAll("input").forEach(i => { 
        i.checked = false; 
        i.disabled = false; 
    });

    document.querySelectorAll(".qcm-question").forEach(q => {
        q.style.border = "2px solid transparent";
        const p = q.querySelector(".correction-panel");
        if (p) p.style.display = "none";
    });

    // C'est ici que le nettoyage se fait avant de re-mélanger
    mélangerEtRéindexer();

    const sb = document.getElementById("score-result");
    if (sb) sb.textContent = "Score : -- / 30";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
    mélangerEtRéindexer();
    
    const btnV = document.getElementById("validate-btn");
    const btnR = document.getElementById("reset-btn");
    if (btnV) btnV.onclick = corrigerQCM;
    if (btnR) btnR.onclick = resetQCM;
});