import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';
import responseCodes from '../src/components/general/respondcodes';

const user = {
  email: 'mari@kari.ee',
  password: 'Kristi',
};
const deleteVarvid = {
  id: 100000,
  wrongId: 'abc',
};

const findVarvid = {
  id: 6,
};

const upVarvid = {
  id: 1,
};

let token: string;
let varvidId: number;
let id: number;


describe('Varvid controller', () => {
  describe('GET /varvid', () => {
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
        .get('/varvid');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('Token is not valid');
    });
    it('responds with code 401 and message with error of no token provided', async () => {
      const response = await request(app)
        .get('/varvid')
        .set('Authorization', 'Bearer khsdlialknc.k<jdsvsz.b c.');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal('No token provided');
    });
    it('responds with code 200 and array of varvid', async () => {
      const response = await request(app)
        .get('/varvid')
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('varvid');
      expect(response.body.varvid).to.be.a('array');
      expect(response.body.varvid.length).to.greaterThan(0);
    });
    it('response with code 404 error and not found varvid by ID', async () => {
      const response = await request(app)
        .get(`/varvid/${varvidId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal(`No Varvid exists with id: ${id}`);
    });
    it('response with code 200 and found varvid by ID', async () => {
      const response = await request(app)
        .get(`/varvid/${findVarvid.id}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('id');
      expect(response.body.id).to.be.a('number');
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
      expect(response.body.error).to.equal('No colour provided');
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
      expect(response.body.error).to.equal('No value provided');
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
      expect(response.body.error).to.equal('No hand colour provided');
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
      //  console.log(response.body);
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.be.a('string');
      expect(response.body.error).to.equal('No hand value provided');
    });
    it('response with code 201 and id new varvid', async () => {
      const response = await request(app)
        .post('/varvid')
        .set('Authorization', `Bearer ${token}`)
        .send({
          varv: 'roosa',
          vaartus: 1,
          kaeVarv: 'lilla',
          kaeVaartus: 1,
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.key('id');
      expect(response.body.id).to.be.a('number');
      varvidId = response.body.id;
    });
  });
  describe('DELETE /varvid/:id', () => {
    it('responds with code 400 and message of No valid id provided', async () => {
      const response = await request(app)
        .delete(`/varvid/${deleteVarvid.wrongId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
    });
    it('responds with code 404 and error message of No varvid with that id', async () => {
      const response = await request(app)
        .delete(`/varvid/${deleteVarvid.id}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(404);
    });
  });
  describe('UPDATE /varvid', () => {
    it('responds with code 400 and message of No valid id provided', async () => {
      const response = await request(app)
        .patch(`/varvid/${deleteVarvid.wrongId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
    });
    it('responds with code 404 and error message of No varvid with that id', async () => {
      const response = await request(app)
        .patch(`/varvid/${upVarvid.id}`)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.key('error');
      expect(response.body.error).to.equal(`No Varvid found with id: ${id}`);
    });
    it('responds with code 204 and no content message', async () => {
      const response = await request(app)
        .patch(`/varvid/${upVarvid.id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          varv: 'lilla',
        });
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(204);
    });
  });
});
