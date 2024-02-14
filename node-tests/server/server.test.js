const request = require('supertest');
const express = require('express');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {

    request(app)
        .get('/')
        // .expect(200)
        .expect(404)
        // .expect('Hello World!')
        // .expect({
        //     error:'Page not found'
        // })
        .expect((res) => {
            expect.expect(res.body).toMatchObject({
                error: 'Page not found'
            })
        })
        .end(done);
});

it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect.expect(res.body).toContainEqual({
            // expect.expect(res.body).toMatchObject({
                name: 'Hakan',
                age: 47
            })
        })
        .end(done);
});






