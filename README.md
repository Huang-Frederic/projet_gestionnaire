<<<<<<< HEAD
# taskmanagement
Application de gestion de tâches
=======
Task Manager – Backend & CI/CD

Présentation

Ce projet fournit une API Express pour la gestion de tâches, avec des tests unitaires, d’intégration et end-to-end. Il intègre un pipeline CI/CD basé sur GitHub Actions pour automatiser les vérifications à chaque modification du code.

Fonctionnalités principales
•	API REST pour les utilisateurs et les tâches
•	Tests unitaires et d’intégration avec Jest et Supertest
•	Tests end-to-end automatisés avec Selenium WebDriver
•	Pipeline CI/CD pour build, lint et test à chaque push/pull request

Exécution des tests

Pour lancer tous les tests :
npm test

Pour exécuter uniquement le test d’intégration principal :
npx jest tests/integration.test.js

Scénarios testés
•	Création et connexion d’un utilisateur
•	Création, modification, récupération et suppression d’une tâche
•	Gestion du token d’authentification

La plupart des fonctionnalités principales passent les tests. Certains tests “rouges” servent à explorer des cas limites et à comparer la logique métier avec les attentes des tests.

Explications sur les échecs de tests
•	Import manquant de Supertest dans certains fichiers
•	Données persistantes entre les tests (pas de réinitialisation automatique)
•	Validation des champs incomplète dans le backend

Points d’amélioration possibles :
Ajouter la validation des champs obligatoires, réinitialiser les données avant chaque test, mettre à jour les tests selon l’évolution de l’API

Tests End-to-End (E2E) avec Selenium

Un test E2E simule l’utilisation réelle de l’application dans un navigateur.

Scénario couvert :
•	Ouverture de l’application (Chrome)
•	Connexion utilisateur, navigation, vérification du comportement front-back

Pour lancer le test E2E :
1.	Démarrer le front-end (npm start dans le dossier frontend)
2.	Lancer le test : node backend/tests/e2e.test.js

Pipeline CI/CD – GitHub Actions

Le projet utilise GitHub Actions pour automatiser les contrôles qualité sur la branche develop.

Déclencheurs :
•	À chaque pull request vers develop
•	À chaque push direct sur develop

Jobs automatisés :
1.	Build : installation des dépendances (npm install) dans backend et frontend
2.	Lint : vérification du code avec ESLint sur les deux dossiers
3.	Test : exécution des tests du backend (npm test)

Environnement :
•	Système : Ubuntu (latest)
•	Node.js : 18.x

Résumé :
À chaque modification sur develop, le pipeline télécharge le code, installe les dépendances, vérifie la qualité du code, et lance les tests pour garantir que seul du code fiable peut être fusionné.

Ce workflow améliore la qualité, réduit les bugs et facilite le travail collaboratif.

Pour aller plus loin
•	Ajouter la validation des champs côté backend
•	Réinitialiser les données avant chaque test
•	Mettre à jour les tests selon l’évolution de l’API
>>>>>>> readme
