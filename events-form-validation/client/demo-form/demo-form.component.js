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
    vm.resetUsernameForm = resetUsernameForm;
    vm.user = {};

    function submitUsername(username, password) {
      if (username && password) {
        console.log(username, password);
      }
    }

    function resetUsernameForm() {
      vm.user = {};
      vm.usernameForm.$setPristine();
      vm.usernameForm.$setUntouched();
    }
  }
})();
