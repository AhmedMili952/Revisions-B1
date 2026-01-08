# CC1 — XTI103

<br><br>

## Question 1 — Objectif principal de la gestion de versions

Quel est l’objectif principal de la gestion de versions dans un projet informatique ?

<input type="radio"> A. Compiler automatiquement le code source    <br>
B. Conserver un historique des modifications    <br>
C. Accélérer l’exécution des programmes    <br>
D. Remplacer les sauvegardes manuelles du système  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> le cœur du versionnage est la **mémoire du projet**. Git n’est ni un compilateur ni un optimiseur. Sa valeur est de savoir **quoi a changé, quand, par qui et pourquoi**, et de pouvoir revenir en arrière sans risque.
>
> **Traduction / sens** : *version* vient du latin **versio** = « action de tourner ».
>
> 🧠 **Git est un livre d’histoire**. Compiler = lire le livre. Versionner = écrire et garder toutes les pages.

</details>

<br><br>

## Question 2 — Définition d’un commit Git

Un commit Git correspond à :

A. Une simple modification temporaire d’un fichier    <br>
B. Une sauvegarde de l’état du projet à un instant donné    <br>
C. Une branche du projet    <br>
D. Un dépôt distant sur GitHub  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> un commit est une **photo complète et figée** du projet. Tant qu’un changement n’est pas commit, il **n’existe pas dans l’historique**.
>
> **Traduction / sens** : *to commit* = **s’engager officiellement** (comme signer un contrat).
>
> 🧠 **Commit = signature officielle**. Tant que tu n’as pas signé, rien n’est enregistré.

</details>

<br><br>

## Question 3 — Type de système Git

Git est un système de gestion de versions :

A. Centralisé    <br>
B. Décentralisé    <br>
C. Sans historique    <br>
D. Basé sur un serveur unique obligatoire  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> chaque développeur possède **tout l’historique**. Même sans internet, Git fonctionne.
>
> **Traduction / sens** : *decentralized* = sans centre unique.
>
> 🧠 **Git = chacun a son coffre-fort complet**. GitHub n’est qu’un coffre partagé.

</details>

<br><br>

## Question 4 — Les trois zones de Git

Quelles sont les trois zones principales de Git ?

A. Working Directory    <br>
B. Staging Area    <br>
C. Repository    <br>
D. Remote Repository  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A, B et C**
>
> Git force une **discipline mentale** en trois étapes distinctes.
>
> * Working Directory : ce que tu touches avec tes mains
> * Staging Area : ce que tu choisis consciemment
> * Repository : ce qui est gravé dans l’histoire
>
> 🧠 **Bureau → Valise → Archives**. Le remote n’est pas une zone, c’est un autre bâtiment.

</details>

<br><br>

## Question 5 — Rôle de git add

La commande `git add` permet :

A. D’enregistrer définitivement un commit    <br>
B. D’ajouter des fichiers à la staging area    <br>
C. De modifier l’historique    <br>
D. De préparer le prochain commit  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et D**
>
> `git add` est une **sélection**, pas une sauvegarde. Tu choisis ce qui mérite d’entrer dans l’histoire.
>
> **Traduction / sens** : *add* = ajouter à une liste.
>
> 🧠 **Add = mettre dans la valise avant le voyage (commit)**.

</details>

<br><br>

## Question 6 — Rôle de git commit

La commande `git commit` :

A. Enregistre un snapshot dans le repository    <br>
B. Vide la staging area    <br>
C. Supprime les modifications locales    <br>
D. Crée un identifiant unique (hash)  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A et D**
>
> le commit crée un **objet Git immuable** identifié par un hash. Rien n’est supprimé sur ton disque.
>
> **Traduction / sens** : *commit* = engagement officiel.
>
> 🧠 **Commit = graver dans la pierre**.

</details>

<br><br>

## Question 7 — Rôle de HEAD

Dans Git, HEAD représente :

A. Le premier commit du projet    <br>
B. Le commit actuellement checkouté (commit courant)    <br>
C. Le dépôt distant    <br>
D. Un tag spécial  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> HEAD est une **référence vers le commit courant**, généralement le dernier commit de la branche active. Le prochain commit aura HEAD comme parent.
>
> **Traduction / sens** : *head* = tête.
>
> 🧠 **Ta tête est là où tu es maintenant dans l’histoire**.

</details>

<br><br>

## Question 8 — Références relatives à HEAD

Quelle référence désigne l’avant-dernier commit ?

A. `HEAD`    <br>
B. `HEAD^`    <br>
C. `HEAD~2`    <br>
D. `HEAD~1`  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et D**
>
> Dans un historique linéaire :
>
> * `HEAD^` = parent direct
> * `HEAD~1` = parent direct
>
> Les deux désignent donc l’avant-dernier commit.
>
> 🧠 **^ et ~1 pointent tous les deux vers le parent**.

</details>

<br><br>


## Question 9 — Définition d’une branche Git

Une branche Git est :

A. Une copie complète du dépôt    <br>
B. Une ligne de développement indépendante    <br>
C. Un pointeur vers un commit    <br>
D. Un fichier de configuration  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> une branche est juste une **étiquette mobile** sur un commit, qui permet d’avancer sans toucher aux autres chemins.
>
> 🧠 **Une branche n’est pas une copie, c’est un panneau indicateur**.

</details>

<br><br>

## Question 10 — Création d’une branche

Quelle commande permet de créer une nouvelle branche nommée `dev` ?

A. git branch dev    <br>
B. git switch dev    <br>
C. git merge dev    <br>
D. git pull dev  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : A**
>
> `branch` signifie créer une branche. `switch` ne fait que se déplacer.
>
> 🧠 **Branch = créer le chemin, Switch = marcher dessus**.

</details>

<br><br>

## Question 11 — git checkout

La commande `git checkout` permet :

A. De déplacer HEAD vers un commit    <br>
B. De changer de branche    <br>
C. De restaurer un fichier à un état antérieur    <br>
D. De créer un commit  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A, B et C**
>
> checkout sert à **sortir une version précise** (commit, branche ou fichier).
>
> 🧠 **Checkout = sortir du stock une version précise**.

</details>

<br><br>

## Question 12 — git reset

Quelle affirmation est correcte ?

A. reset --soft garde l’index et le working directory    <br>
B. reset --mixed vide l’index mais garde les fichiers    <br>
C. reset --hard garde les modifications non commitées    <br>
D. reset --hard peut faire perdre du travail  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A, B et D**
>
> reset **réécrit l’histoire** et peut toucher aux fichiers.
>
> 🧠 **Soft = doux, Hard = destructeur**.

</details>

<br><br>

## Question 13 — git revert

Quelle affirmation est correcte concernant `git revert` ?

A. Supprime un commit    <br>
B. Crée un commit inverse    <br>
C. Réécrit l’historique    <br>
D. Sûr sur une branche partagée  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et D**
>
> revert **corrige sans effacer**.
>
> 🧠 **Revert = annuler avec un nouveau ticket**.

</details>

<br><br>

## Question 14 — Fusion de branches

La commande `git merge` permet :

A. Supprimer une branche    <br>
B. Intégrer une branche dans une autre    <br>
C. Créer un commit de fusion    <br>
D. Déplacer HEAD sans historique  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> merge assemble deux histoires.
>
> 🧠 **Merge = deux parents, un enfant**.

</details>

<br><br>

## Question 15 — Conflit de fusion

Un conflit apparaît lorsque :

A. Deux branches modifient la même ligne    <br>
B. Git ne peut pas choisir automatiquement    <br>
C. Une branche est supprimée    <br>
D. Un commit est renommé  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A et B**
>
> Git s’arrête quand deux vérités s’opposent.
>
> 🧠 **Deux auteurs écrivent la même phrase différemment**.

</details>

<br><br>

## Question 16 — Marqueurs de conflit

Quels marqueurs apparaissent dans un fichier en conflit ?

A. <<<<<<< HEAD    <br>
B. =======    <br>
C. >>>>>>> dev    <br>
D. ### CONFLICT ###  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A, B et C**
>
> ces marqueurs sont ajoutés automatiquement par Git pour délimiter clairement les deux versions concurrentes afin que l’humain choisisse.
>
> 🧠 **< avant, = choix, > après**.

</details>

<br><br>

## Question 17 — git rebase

Quelle affirmation est correcte ?

A. Crée un commit de fusion    <br>
B. Réécrit l’historique    <br>
C. Rejoue les commits    <br>
D. Sûr sur branche partagée  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> rebase déplace la base de l’histoire.
>
> 🧠 **Rebase = déplacer la pile ailleurs**.

</details>

<br><br>

## Question 18 — merge vs rebase

Quelle différence est correcte ?

A. merge réécrit l’historique    <br>
B. rebase rend l’historique linéaire    <br>
C. merge crée un commit de fusion    <br>
D. rebase est toujours sûr  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> > * `merge` conserve l’historique tel quel et ajoute un commit de fusion : aucune réécriture.
>
> * `rebase` déplace les commits et change leurs hash pour obtenir une ligne droite.
>
> 🧠 **Merge = mariage (on garde les deux histoires), Rebase = chirurgie (on modifie le passé)**.

</details>

<br><br>

## Question 19 — git status

Que signifie "Untracked files" ?

A. Fichiers déjà commités    <br>
B. Fichiers ignorés    <br>
C. Fichiers jamais ajoutés à Git    <br>
D. Fichiers prêts à être commités  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : C**
>
> Git ne sait même pas que ces fichiers existent.
>
> 🧠 **Untracked = invisible pour Git**.

</details>

<br><br>

## Question 20 — Zones et git status

"Changes to be committed" correspond à :

A. Working Directory    <br>
B. Staging Area    <br>
C. Repository    <br>
D. Remote  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> 🧠 **Dans la valise, prêt à partir**.

</details>

<br><br>

## Question 21 — git init

Quelle commande initialise un dépôt Git ?

A. git init    <br>
B. git clone    <br>
C. git start    <br>
D. git remote add  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : A**
>
> 🧠 **Init = commencer l’histoire**.

</details>

<br><br>

## Question 22 — Dossier .git

Que contient le dossier `.git` ?

A. Les fichiers du projet    <br>
B. La base de données Git    <br>
C. L’éditeur    <br>
D. Les dépendances  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> 🧠 **.git = cerveau + mémoire**.

</details>

<br><br>

## Question 23 — git clone

Quelle commande copie un dépôt distant en local ?

A. git pull    <br>
B. git fetch    <br>
C. git clone    <br>
D. git push  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : C**
>
> 🧠 **Clone = photocopie complète**.

</details>

<br><br>

## Question 24 — git remote

Quelle commande associe un dépôt local à un dépôt distant ?

A. git remote add origin <url>    <br>
B. git add origin <url>    <br>
C. git push origin    <br>
D. git clone origin  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : A**
>
> 🧠 **Remote = carnet d’adresses**.

</details>

<br><br>

## Question 25 — fetch vs pull

Quelle affirmation est correcte ?

A. fetch fusionne    <br>
B. pull récupère et fusionne (par défaut)    <br>
C. fetch ne modifie pas la branche    <br>
D. pull crée toujours un commit  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> Par défaut :
>
> * `git fetch` récupère sans modifier la branche courante
> * `git pull` = fetch + merge (sauf configuration en rebase)
>
> 🧠 **Fetch = regarder sans toucher, Pull = ramener et intégrer**.

</details>

<br><br>

## Question 26 — git push

Que fait `git push` ?

A. Télécharge les commits    <br>
B. Envoie les commits locaux    <br>
C. Supprime le distant    <br>
D. Fusionne les branches  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> 🧠 **Push = pousser vers l’extérieur**.

</details>

<br><br>

## Question 27 — master vs main

Pourquoi renommer `master` en `main` ?

A. Supprimer l’historique    <br>
B. Aligner avec GitHub    <br>
C. Changer de dépôt    <br>
D. Optimiser Git  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponse correcte : B**
>
> 🧠 **main = branche principale reconnue partout**.

</details>

<br><br>

## Question 28 — Pull request

Quel est le rôle d’une pull request ?

A. Créer un dépôt    <br>
B. Proposer une fusion    <br>
C. Permettre une revue de code    <br>
D. Supprimer une branche  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B et C**
>
> une pull request n’applique aucun changement automatiquement. Elle sert à demander validation, discussion et relecture avant intégration.
>
> 🧠 **Pull Request = Permission Request**.

</details>

<br><br>

## Question 29 — Issues GitHub

À quoi servent les issues ?

A. Bugs    <br>
B. Fonctionnalités    <br>
C. Suivi des tâches    <br>
D. Fusion de code  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : A, B et C**
>
> une issue sert uniquement au suivi et à la discussion. Elle ne modifie jamais le code.
>
> 🧠 **Issue = problème déclaré, pas résolu**.

</details>

<br><br>

## Question 30 — Bonnes pratiques collaboratives

Quelles pratiques sont recommandées ?

A. Travailler sur main    <br>
B. Pull avant de commencer    <br>
C. Branches dédiées    <br>
D. Supprimer les branches après fusion  <br>

<details>
<summary><b>Correction</b></summary><br>

> ✅ **Réponses correctes : B, C et D**
>
> > * Pull évite de travailler sur une version obsolète
>
> * Branch isole le travail
> * Merge intègre proprement
> * Supprimer évite l’encombrement
>
> 🧠 **Nettoyer après avoir rangé**.

</details>

<br><br>
