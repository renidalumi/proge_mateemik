import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

const user = {
  email: 'mari@kari.ee',
  password: 'Kristi',
};
const deleteUser = {
  id: 100000,
  wrongId: 'abc',
};
const updateUser = {
  id: 2,
};

let token: string;
let userId: number;
let newUserId: number;
let id: number;

describe('User controller', () => {
  describe('GET /user', () => {
    it('responds with code 200 and token after login', async () => {
      const response = await request(app)
        .post('/login')
        .send(user);
      expect(response.body).to.be.a('object');
      // console.log(response.body);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('token');
      // console.log(response.body);
      expect(response.body.token).to.be.a('string');
      token = response.body.token;
    });
    it('responds with code 401 and message with error of no token invalid', async () => {
      const response = await request(app)
        .get('/user');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('No token provided');
    });
    it('responds with code 401 and message with error of no token provided', async () => {
      const response = await request(app)
        .get('/user')
        .set('Authorization', 'Bearer khsdlialknc.k<jdsvsz.b c.');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('Token is not valid');
    });
    it('responds with code 200 and array of user', async () => {
      const response = await request(app)
        .get('/user')
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('users');
      expect(response.body.user).to.be.a('array');
      expect(response.body.user.length).to.greaterThan(0);
    });
    it('response with code 400 error and not found user by ID', async () => {
      const response = await request(app)
        .get(`/user/${userId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal(`No user exists with id: ${id}`);
    });
    it('response with code 200 and found user by ID', async () => {
      const response = await request(app)
        .get(`/user/${userId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('id');
      expect(response.body.id).to.be.a('number');
    });
  });
  describe('POST /user', () => {
    it('responds with code 400 and message of error missing colour', async () => {
      const response = await request(app)
        .post('/user')
        .set('Authorization', `Bearer ${token}`)
        .send({
          pereNimi: 'Nimi',
          email: 'lilla@lilla.ee',
          password: 'Nimi',
          role: 'User',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal('Eesnimi is required');
    });
    it('responds with code 400 and message of error missing value', async () => {
      const response = await request(app)
        .post('/user')
        .set('Authorization', `Bearer ${token}`)
        .send({
          eesNimi: 'Nimi',
          email: 'lilla@lilla.ee',
          password: 'Nimi',
          role: 'User',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal('Perenimi is required');
    });
    it('responds with code 400 and message of error missing hand colour', async () => {
      const response = await request(app)
        .post('/user')
        .set('Authorization', `Bearer ${token}`)
        .send({
          eesNimi: 'Nimi',
          pereNimi: 'Nimii',
          password: 'Nimi',
          role: 'User',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal('Email is required');
    });
    it('responds with code 400 and message of error missing hand value', async () => {
      const response = await request(app)
        .post('/user')
        .set('Authorization', `Bearer ${token}`)
        .send({
          eesNimi: 'Nimi',
          pereNimi: 'Nimii',
          email: 'nimi@nimii.ee',
          role: 'User',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal('Password is required');
    });
    it('response with code 201 and id new user', async () => {
      const response = await request(app)
        .post('/user')
        .set('Authorization', `Bearer ${token}`)
        .send({
          eesNimi: 'Nimi',
          pereNimi: 'Nimii',
          email: 'nimi@nimii.ee',
          password: 'Nimi',
          role: 'User',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.key('id');
      expect(response.body.id).to.be.a('number');
      userId = response.body.id;
    });
  });
  describe('DELETE /user/:id', () => {
    it('responds with code 400 and message of No valid id provided', async () => {
      const response = await request(app)
        .delete(`/user/${deleteUser.wrongId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
    });
    it('responds with code 400 and error message of No user with that id', async () => {
      const response = await request(app)
        .delete(`/user/${deleteUser.id}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
    });
  });
});
