const request = require('supertest');
const app = require('../server');

describe('Parcours utilisateur complet (test d’intégration)', () => {
    let token;
    let taskId;

    it('registre un nouvel utilisateur', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                email: 'integration@test.com',
                password: 'testpassword',
                name: 'Integration User'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
    });

    it('crée une nouvelle tâche', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Tâche intégration',
                description: 'Créée via le test d’intégration',
                priority: 'high'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        taskId = res.body.id;
    });

    it('modifie la tâche', async () => {
        const res = await request(app)
            .put(`/api/tasks/${taskId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Tâche modifiée',
                status: 'done'
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Tâche modifiée');
        expect(res.body.status).toBe('done');
    });

    it('récupère la tâche', async () => {
        const res = await request(app)
            .get(`/api/tasks/${taskId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Tâche modifiée');
    });

    it('supprime la tâche', async () => {
        const res = await request(app)
            .delete(`/api/tasks/${taskId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(204);
    });
});