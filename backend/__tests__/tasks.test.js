const request = require('supertest');
const app = require('../server');

let token;
let createdTaskId;

beforeAll(async () => {
    const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: 'admin@test.com',
            password: 'password'
        });
    token = res.body.token;
});

describe('Tasks endpoints', () => {
    it('should get all tasks', async () => {
        const res = await request(app)
            .get('/api/tasks')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Nouvelle tâche test',
                description: 'Test de création',
                priority: 'high'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Nouvelle tâche test');
        createdTaskId = res.body.id;
    });

    it('should get a task by id', async () => {
        const res = await request(app)
            .get(`/api/tasks/${createdTaskId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', createdTaskId);
    });

    it('should update a task by id', async () => {
        const res = await request(app)
            .put(`/api/tasks/${createdTaskId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Titre modifié',
                status: 'done'
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Titre modifié');
        expect(res.body.status).toBe('done');
    });

    it('should delete a task by id', async () => {
        const res = await request(app)
            .delete(`/api/tasks/${createdTaskId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(204);
    });

    it('should return 404 for a deleted task', async () => {
        const res = await request(app)
            .get(`/api/tasks/${createdTaskId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(404);
    });
});