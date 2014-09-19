"use strict";

var request = require("supertest");
var path    = require("path");
var app     = require(path.resolve(__dirname, "..", "app.js"));

describe("GET /admin", function(){
  it("redirects a not logged in user", function(done){
    request(app)
      .get("/admin")
      .expect(302, done);
  });
});
