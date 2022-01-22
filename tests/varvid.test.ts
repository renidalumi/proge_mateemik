import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

describe('Varvid controller', () => {
describe('GET /varvid', () => {
it('responds with code 401 and message with error of no token provided', async () => {
    const response = await request(app)
    .get('/varvid');
    expect(response.body).to.be.a('object');
    expect(response.statusCode).to.equal(401);
    expect(response.body).to.have.key('error')
    expect(response.body.message).to.equal('No token provided');
});
});
});