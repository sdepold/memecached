module.exports = function () {
  this.Then(/^I should see the notification "(.+)"$/, function (flashMessage, callback) {
    if (this.browser.html(".flash").match(new RegExp(".*" + flashMessage + ".*"))) {
      callback();
    } else {
      callback.fail("Unable to find notification '" + flashMessage + "'");
    }
  });
}
