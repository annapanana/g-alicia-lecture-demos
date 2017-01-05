(function () {
  angular
    .module("app", [])
    .component("demoForm", {
      templateUrl: "demo-form/demo-form.template.html",
      controller: DemoFormController
    });

  function DemoFormController() {
    var vm = this;

    vm.submitUsername = submitUsername;
    vm.user = {};

    function submitUsername(username) {
      console.log(username);
    }
  }
})();
