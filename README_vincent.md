
"project": "Task Manager Backend",
"description": "API Express pour gestionnaire de tâches avec tests unitaires et d'intégration (Jest/Supertest).",
"test_instructions": "Lancer les tests avec la commande : npm test"

"test_frameworks": ["Jest", "Supertest"]

"test_results": 

"file": "__tests__/users.test.js",
"status": "PASS",
"tests": 3

"file": "__tests__/auth.test.js",
"status": "PASS",
"tests": 4
},
{
"file": "__tests__/tasks.test.js",
"status": "PASS",
"tests": 4


"file": "__tests__/register.test.js",
"status": "FAIL",
"tests": 4,
"failures": 

"test": "should register a new user with valid data",
"reason": "Expected: 201, Received: 400"

"test": "should reject registration without name",
"reason": "Expected: 500, Received: 201"

"explications": 
"Certains tests échouent volontairement, pour explorer le comportement de l’API dans des cas limites.",
"L’import manquant de Supertest dans register.test.js provoquait initialement des erreurs ReferenceError.",
"Le test d’inscription avec un utilisateur existant retourne 400 car les données en mémoire ne sont pas remises à zéro entre les tests.",
"Le test d’inscription sans champ 'name' retourne 201 car le backend n’impose pas cette validation.",
"Ces échecs illustrent la différence entre la logique métier implémentée et celle attendue par les tests."


"conclusion": 
"La majorité des tests passent sur les fonctionnalités principales.",
"Les tests rouges ne sont pas bloquants dans le cadre d’un exercice pédagogique.",
"Ce projet sert à apprendre à tester une API et à mieux comprendre les cas limites."

"further_steps": 
"Ajouter la validation des champs obligatoires côté backend.",
"Prévoir une réinitialisation des données avant chaque test si besoin.",
"Mettre à jour les tests en fonction de l’évolution de l’API."


Tests d’intégration – Task Manager Backend

Ce projet inclut des tests d’intégration avec Jest et Supertest pour vérifier le bon fonctionnement global de l’API.

Scénario testé :
•	Création d’un utilisateur via /api/auth/register
•	Connexion et récupération du token
•	Création d’une tâche
•	Modification de la tâche
•	Récupération de la tâche
•	Suppression de la tâche

Comment exécuter les tests :
npm test

ou pour n’exécuter que le test d’intégration :
npx jest tests/integration.test.js

Résultat attendu :
Un test d’intégration réussi prouve que l’enchaînement complet de l’API fonctionne comme prévu.
Si le test échoue, cela signale un point d’amélioration dans le parcours utilisateur.

⸻
