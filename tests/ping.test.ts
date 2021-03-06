import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

describe('Ping controller', () => {
describe('GET /ping', () => {
it('responds with code 200 and message Alive', async () => {
    const response = await request(app).get('/ping');
    expect(response.body).to.be.a('object');
    expect(response.statusCode).to.equal(200);
    expect(response.body.message).to.equal('Alive');
});
});
});