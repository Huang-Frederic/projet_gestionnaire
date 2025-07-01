const request = require('supertest');
const app = require('../server');

describe('Authentication endpoints', () => {
    it('should login with correct credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'admin@test.com',
                password: 'password'
            });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('user');
        expect(res.body.user.email).toBe('admin@test.com');
    });

    it('should reject login with wrong password', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'admin@test.com',
                password: 'wrongpass'
            });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should reject login with unknown email', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'notfound@test.com',
                password: 'password'
            });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
    });
});