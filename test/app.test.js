//const request = require('supertest');
//import { expect } from "chai";//= require('chai');

//import chai from 'chai';
const app = require('../app');
const request = require("request");
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello, World!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});