var expect  = require("expect.js");
var request = require("supertest");
var path    = require("path");
var app     = require(path.resolve(__dirname, "..", "app.js"));

describe('GET /admin', function(){
  it('redirect', function(done){
    request(app)
      .get('/admin')
      .expect(302, done);
  })
})
