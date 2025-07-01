const request = require('supertest');
const app = require('../server');

let token;

beforeAll(async () => {
    const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: 'admin@test.com',
            password: 'password'
        });
    token = res.body.token;
});

describe('Users endpoints', () => {
    it('should get all users without passwords', async () => {
        const res = await request(app)
            .get('/api/users')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).not.toHaveProperty('password');
    });

    it('should return 401 without token', async () => {
        const res = await request(app)
            .get('/api/users');
        expect(res.statusCode).toBe(401);
    });
});