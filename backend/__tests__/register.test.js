const request = require('supertest');
const app = require('../server');

it('should register a new user with valid data', async () => {
    const res = await request(app)
        .post('/api/auth/register')
        .send({
            email: 'newuser@test.com',
            password: 'newpassword',
            name: 'New User'
        });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe('newuser@test.com');
});

it('should register a new user with valid data', async () => {
    const res = await request(app)
        .post('/api/auth/register')
        .send({
            email: 'newuser@test.com',
            password: 'newpassword',
            name: 'New User'
        });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe('newuser@test.com');
});

it('should reject registration with already used email', async () => {
    const res = await request(app)
        .post('/api/auth/register')
        .send({
            email: 'admin@test.com',
            password: 'password',
            name: 'Admin User'
        });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
});

it('should reject registration without password', async () => {
    const res = await request(app)
        .post('/api/auth/register')
        .send({
            email: 'anotheruser@test.com',
            name: 'No Password User'
        });
    expect(res.statusCode).toBe(500); // ou 400 selon ta logique serveur
    expect(res.body).toHaveProperty('error');
});

it('should reject registration without name', async () => {
    const res = await request(app)
        .post('/api/auth/register')
        .send({
            email: 'anotheruser2@test.com',
            password: 'somepassword'
        });
    expect(res.statusCode).toBe(201); // ou 400 selon ta logique serveur
    expect(res.body).toHaveProperty('error');
});