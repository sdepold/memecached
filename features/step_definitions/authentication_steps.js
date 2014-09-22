module.exports = function () {
  this.Given(/^I open the admin interface$/, function (callback) {
    this.visit("/admin", callback);
  });
}
