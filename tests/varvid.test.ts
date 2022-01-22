import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

const user = {
  email: 'kati@karu.ee',
  password: 'Kristi',
};

let token: string;

describe('Varvid controller', () => {
  describe('GET /varvid', () => {
    it('responds with code 200 and token after login', async () => {
      const response = await request(app)
        .post('/login')
        .send(user);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('token');
      expect(response.body.token).to.be.a('string');
      token = response.body.token;
    });
    it('responds with code 401 and message with error of no token invalid', async () => {
      const response = await request(app).get('/VARVID');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('No token provided');
    });
    it('responds with code 401 and message with error of no token provided', async () => {
      const response = await request(app)
        .get('/varvid')
        .set('Authorization', 'Bearer khsdlialknc.k<jdsvsz.b c.');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('Token is not valid');
    });
    it('responds with code 200 and array of varvid', async () => {
      const response = await request(app)
        .get('/varvid')
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.varvid).to.be.a('array');
      expect(response.body.varvid.length).to.greaterThan(0);
    });
  });
  describe('POST /varvid', () => {
    it('responds with code 400 and message of error missing colour', async () => {
      const response = await request(app)
        .post('/varvid')
        .set('Authorization', `Bearer ${token}`)
        .send({
          vaartus: 1,
          kaeVarv: 'lilla',
          kaeVaartus: 1,
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal(!'No colour provided');
    });
    it('responds with code 400 and message of error missing value', async () => {
      const response = await request(app)
        .post('/varvid')
        .set('Authorization', `Bearer ${token}`)
        .send({
          varv: 'roosa',
          kaeVarv: 'lilla',
          kaeVaartus: 1,
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal(!'No value providedd');
    });
    it('responds with code 400 and message of error missing hand colour', async () => {
      const response = await request(app)
        .post('/varvid')
        .set('Authorization', `Bearer ${token}`)
        .send({
          vaartus: 1,
          varv: 'lilla',
          kaeVaartus: 1,
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal(!'No hand colour provided');
    });
    it('responds with code 400 and message of error missing hand value', async () => {
      const response = await request(app)
        .post('/varvid')
        .set('Authorization', `Bearer ${token}`)
        .send({
          varv: 'roosa',
          vaartus: 1,
          kaeVarv: 'lilla',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal(!'No hand value provided');
    });
  });
});
