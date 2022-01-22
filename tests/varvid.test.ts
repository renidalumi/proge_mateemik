import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

const user ={
    email: "kati@karu.ee",
    password: "Kristi"
};

let token: string;

describe('Varvid controller', () => {
describe('Post /varvid', () => {
    it('responds with code 200 and token after login', async () => {
        const response = await request(app)
        .post("/login")
        .send(user);
        expect(response.body).to.be.a("object");
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.key("token");
        expect(response.body.token).to.be.a("string");
        token = response.body.token;
        }); 
it('responds with code 401 and message with error of no token invalid', async () => {
    const response = await request(app).get("/VARVID");
    expect(response.body).to.be.a("object");
    expect(response.statusCode).to.equal(401);
    expect(response.body).to.have.key("error");
    expect(response.body.error).to.equal("No token provided");
    });
it('responds with code 401 and message with error of no token provided', async () => {
    const response = await request(app)
        .get("/players")
        .set("Authorization", "Bearer khsdlialknc.k<jdsvsz.b c.");
    expect(response.body).to.be.a("object");
    expect(response.statusCode).to.equal(401);
    expect(response.body).to.have.key("error");
    expect(response.body.error).to.equal("Token is not valid");
    });
});
});