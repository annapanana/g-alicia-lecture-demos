(function () {
  angular
    .module("callMe.component", [])
    .component("callMe", {
      templateUrl: "/call-me/call-me.template.html",
      controller: controller
    });

  function controller() {
    var vm = this;
  }
})();
